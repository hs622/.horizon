import { Type } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateCompanyProfile {
  @IsString({ message: 'Company name must be a string' })
  @IsNotEmpty({ message: 'Company name is required' })
  readonly company_name: string;

  @IsString({ message: 'Business type must be a string' })
  @IsNotEmpty({ message: 'Business type is required' })
  readonly business_type: string;

  @IsString({ message: 'Industry must be a string' })
  readonly industry: string;

  @IsString({ message: 'Company address must be a string' })
  readonly company_address: string;

  @IsString({ message: 'City must be a string' })
  @IsNotEmpty({ message: 'City is required' })
  readonly city: string;

  @IsString({ message: 'Province must be a string' })
  @IsNotEmpty({ message: 'Province is required' })
  readonly province: string;

  @IsString({ message: 'Country must be a string' })
  @IsNotEmpty({ message: 'Country is required' })
  readonly country: string;

  @IsString({ message: 'Zip code must be a string' })
  @IsNotEmpty({ message: 'Zip code is required' })
  readonly zip_code: string;

  @IsString({ message: 'Country code must be a string' })
  @IsNotEmpty({ message: 'Country code is required' })
  readonly country_code: string;

  @IsNumber({}, { message: 'Contact number must be a number' })
  @IsNotEmpty({ message: 'Contact number is required' })
  readonly contact_number: number;

  @IsEmail()
  @IsNotEmpty({ message: 'Email address is required' })
  readonly email_address: string;

  @IsUrl({}, {message: 'Please enter secure a valid URL.'})
  @IsOptional()
  readonly url: string;

  @IsUrl({}, {message: 'Please enter secure a valid URL.'})
  @IsNotEmpty()
  readonly logo: string;

  @IsString({ message: 'Enter a basic description about company.' })
  @IsNotEmpty({ message: 'Basic description is required' })
  readonly basic_description: string;

  @IsNumber({}, {
    message: 'Please enter a valid year of establishment of the company.',
  })
  @IsNotEmpty({ message: 'Year of establishment is required' })
  readonly established_at: number;

  @IsInt({ message: 'Please enter a valid number of employees.' })
  @IsOptional()
  readonly number_of_employees: number;

  @ValidateNested()
  @IsNotEmptyObject({}, { message: 'Company representative can\'t be empty.' })
  @Type(() => CreateUserDto)
  readonly company_representative: CreateUserDto;
}
