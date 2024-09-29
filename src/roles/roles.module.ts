import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService, PrismaService],
})
export class RolesModule {}
