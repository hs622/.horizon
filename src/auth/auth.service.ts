import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async generateToken(
    userId: string,
    role: string,
  ): Promise<{ access_token: string }> {
    return {
      access_token: await this.jwtService.signAsync({
        sub: userId,
        role: role,
      }),
    };
  }
 
  getForgetEmailLink() {

  }
  
  getEmail() {}
  getForgetPasswordLink() {}
  getForgetPassword() {}
  getResetPassword() {}
}
