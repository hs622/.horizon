import { PartialType } from "@nestjs/mapped-types";
import { LoginResponse } from "./login-response.dto";

export class RegisterResponse extends PartialType(LoginResponse) {}