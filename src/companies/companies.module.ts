import { Module } from '@nestjs/common';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService, UsersService, PrismaService]
})
export class CompaniesModule {}
