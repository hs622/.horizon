import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompaniesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getCompanies() {}
  async getCompany(id) {}
  
  async createCompany() {

  }
  
  async updateCompany(id: string) {}
  async removeCompany(id: string) {}
}
