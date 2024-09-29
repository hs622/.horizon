import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsString,
  IsStrongPassword,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from './address.dto';
import { Type } from 'class-transformer';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  readonly name: string;

  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  readonly email: string;

  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    },
    { message: 'Password is too weak' },
  )
  readonly password: string;

  // @IsNotEmpty()
  // @IsString(Role, { message: 'Invalid role' })
  // readonly role: Role;

  @ValidateNested()
  @IsNotEmptyObject({}, { message: 'Address is required.' })
  @Type(() => CreateAddressDto)
  readonly address: CreateAddressDto;

  @IsNotEmpty()
  @IsNumber({}, { message: 'Birth year must be a number' })
  readonly birth_year: number;
}
