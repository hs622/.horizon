import { CreateUserDto } from "src/users/dto/create-user.dto";

export class LoginResponse {
  user: CreateUserDto;
  access_token: string;
}