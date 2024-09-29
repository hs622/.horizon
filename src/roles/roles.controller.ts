import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { UpdateRoleDto } from './dto/update-role.dto';
import { NotAcceptableException } from '@nestjs/common';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get('/')
  async getRoles() {
    return await this.rolesService.getRoles();
  }

  @Get('/with-trash')
  async getRolesWithTrash() {
    return await this.rolesService.getRolesWithTrash();
  }

  @Get('/:id')
  async getRoleById(@Param('id') recordId: string) {
    return await this.rolesService.getRoleById(recordId);
  }

  @Post('/')
  @UsePipes()
  async createRole(@Body(ValidationPipe) createRole: CreateRoleDto) {
    if(createRole.title && await this.rolesService.checkTitle(createRole.title))
      throw new HttpException('Duplicated Title', HttpStatus.NOT_ACCEPTABLE);
    return await this.rolesService.createRole(createRole);
  }

  @Patch('/:id')
  @UsePipes()
  async editRole(
    @Param('id') recordId: string,
    @Body(ValidationPipe) updateRole: UpdateRoleDto,
  ) {
    if(updateRole.title && await this.rolesService.checkTitle(updateRole.title))
      throw new HttpException('Duplicated Title', HttpStatus.NOT_ACCEPTABLE);
    return this.rolesService.updateRole(recordId, updateRole);
  }

  @Delete('/:id')
  async disabledRole(@Param('id') recordId: string) {
    return this.rolesService.removeRole(recordId);
  }
}
