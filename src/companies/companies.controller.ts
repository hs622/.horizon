import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateCompanyProfile } from './dto/create-company-profile';
import { CompaniesService } from './companies.service';
import { UsersService } from 'src/users/users.service';

@Controller('companies')
export class CompaniesController {
  constructor(
    private readonly userService: UsersService,
    private readonly companiesService: CompaniesService,
  ) {}

  @Post('initialize')
  async registerCompany(
    @Body(ValidationPipe) createCompanyProfile: CreateCompanyProfile,
  ) {
    const representative = await this.userService.createUser(createCompanyProfile.company_representative);
    // if(representative) {
      // const 
      // await this.companiesService.createCompany();
    // }

    return createCompanyProfile;
  }
}
