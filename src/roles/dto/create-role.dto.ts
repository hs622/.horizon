import { IsBoolean, IsEmpty, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateRoleDto {

  @IsString()
  @IsNotEmpty()
  readonly title: string;
  
  @IsString()
  @IsOptional()
  readonly description: string;

  @IsInt()
  readonly level: number;

  @IsBoolean()
  readonly status: boolean;
}