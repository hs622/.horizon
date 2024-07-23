import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginInput {
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}

export class RegisterInput extends CreateUserDto {}
