import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { LocalGuard } from './guards/local.guard';
import { RegisterInput } from './inputs/auth.input';
import { LoginResponse } from './dto/login-response.dto';
import { RegisterResponse } from './dto/register-response.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Post('/login')
  @UseGuards(LocalGuard)
  async getLogin(@Request() Request): Promise<LoginResponse> {
    const token = await this.authService.generateToken(
      Request.user.id,
      Request.user.role,
    );

    return {
      user: Request.user,
      ...token,
    };
  }

  @Post('/register')
  async getRegister(
    @Body(ValidationPipe) registerInput: RegisterInput,
  ): Promise<RegisterResponse>
   {
    const user = await this.userService.createUser(registerInput);
    console.log(user,"user")
    const {id}=user;
    return {
      user:user,
      access_token: '',
    };
  }

  // getForgetEmailLink() {}
  // getForgetPasswordLink() {}
  // getForgetPassword() {}
  // getResetPassword() {}
}
