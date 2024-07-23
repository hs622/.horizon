import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsStrongPassword,
  ValidateIf,
  ValidateNested
} from 'class-validator';
import { CreateAddressDto } from './address.dto';
import { Type } from 'class-transformer';

enum Role {
  USER = 'USER',
  AUTHOR = 'AUTHOR',
  PUBLISHER = 'PUBLISHER',
}

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  readonly password: string;

  @IsNotEmpty()
  @IsEnum(Role)
  readonly role: Role;

  @ValidateNested() 
  @Type(() => CreateAddressDto)
  readonly address: CreateAddressDto;

  @IsNotEmpty()
  @IsInt() 
  readonly birth_year: number;
}