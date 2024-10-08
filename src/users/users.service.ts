import { Injectable, NotAcceptableException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return await this.prismaService.user.findMany();
  }

  async getUser(userId: string): Promise<User> {
    return await this.prismaService.user.findFirst({
      where: {
        id: userId,
      },
    });
  }

  async getUserByEmail(userEmail: string): Promise<User> {
    return await this.prismaService.user.findFirst({
      where: { email: userEmail },
    });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    
    // Static method call for hashing password.
    // const hashpassword = await bcrypt.hash(createUserDto.password, 10);    
    // console.log({hashpassword});
    
    // const newUser = {
    //   ...createUserDto,
    //   password: hashpassword,
    // } 
 
    return await this.prismaService.user.create({
      data: createUserDto,
    });
 
  }

  async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return await this.prismaService.user.update({
      where: { id: userId },
      data: updateUserDto,
    });
  }

  // async disableUser() {}
  // async removeUser() {}
}
