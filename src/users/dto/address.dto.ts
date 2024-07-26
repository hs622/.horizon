import { IsEmpty, IsOptional, IsString } from "class-validator";

export class CreateAddressDto {

  @IsString()
  readonly state: string;
  
  @IsString()
  readonly city: string;

  @IsString()
  @IsOptional()
  readonly street: string;

  @IsString()
  @IsOptional()
  readonly zip: string;
  
}