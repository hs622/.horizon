import { Body, Controller, Post, Request, UseGuards, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service'; 
import { LocalGuard } from './guards/local.guard';
import { RegisterInput } from './auth.input';
import { LoggingInterceptor } from 'src/interceptors/logging/logging.interceptor';

@Controller('auth')
@UseInterceptors(LoggingInterceptor)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Post('/login')
  @UseGuards(LocalGuard)
  async getLogin(@Request() Request) {    
    const token = await this.authService.generateToken(Request.user.id, Request.user.role)
    return {
      'user': Request.user,
      ...token
    };
  }

  @Post('/register')
  getRegister(@Body(ValidationPipe) registerInput: RegisterInput) {
    return this.userService.createUser(registerInput);
  }

  getForgetEmailLink() {}
  getForgetPasswordLink() {}
  getForgetPassword() {}
  getResetPassword() {}
}
