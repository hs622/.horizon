import {
  Injectable,
  Controller,
  HttpException,
  HttpExceptionBody,
  HttpStatus,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from '@prisma/client';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getRoles(): Promise<Role[]> {
    return await this.prismaService.role.findMany({
      where: {
        deletedAt: false,
      },
    });
  }

  async getRolesWithTrash(): Promise<Role[]> {
    return await this.prismaService.role.findMany({});
  }

  async getRoleById(recordId: string): Promise<Role | HttpException> {
    const response = await this.prismaService.role.findUnique({
      where: {
        id: recordId,
      },
    });

    if (response) return response;
    else throw new HttpException('Role Not found.', HttpStatus.NOT_FOUND);
  }

  async createRole(payload: CreateRoleDto): Promise<Role> {
    const response = await this.prismaService.role.create({
      data: payload,
    });

    return response;
  }

  async updateRole(recordId: string, payload: UpdateRoleDto): Promise<Role> {
    const response = await this.prismaService.role.update({
      where: {
        id: recordId,
      },
      data: payload,
    });

    return response;
  }

  async removeRole(recordId: string): Promise<boolean> {
    await this.prismaService.role.update({
      where: {
        id: recordId,
      },
      data: {
        deletedAt: true,
      },
    });

    return true;
  }

  async checkTitle(title: string): Promise<boolean> {
    const response = await this.prismaService.role.findFirst({
      where: {
        title,
      },
    });

    console.log(response);
    return response ? true : false;
  }

  async hardRomveRole(recordId: string) {}
}
