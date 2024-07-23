import { IsEmpty, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateAddressDto {

  @IsString()
  state: string;
  
  @IsString()
  city: string;

  @IsString()
  @IsOptional()
  street: string;

  @IsString()
  @IsOptional()
  zip: string;
  
}