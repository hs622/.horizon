import { MiddlewareConsumer, Module, RequestMethod, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './companies/companies.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesMiddleware } from './middlewares/routes.middleware';
import { APP_PIPE } from '@nestjs/core'; 

@Module({
  imports: [AppModule, UsersModule, AuthModule, CompaniesModule],
  controllers: [AppController, UsersController, AuthController],
  /**
   * For remaider: 
   * APP_PIPE is a token that represents the global pipe instance. We can use it to override the default global pipe with our custom pipe.
   * 
   */
  providers: [{provide: APP_PIPE, useClass: ValidationPipe }, AppService, PrismaService, UsersService, AuthService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RoutesMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    })
  }
}
