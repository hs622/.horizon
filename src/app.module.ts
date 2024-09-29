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
import { ArticlesModule } from './articles/articles.module';
import { ArticlesController } from './articles/articles.controller';
import { RolesController } from './roles/roles.controller';
import { RolesService } from './roles/roles.service';
import { RolesModule } from './roles/roles.module';
import { ArticlesService } from './articles/articles.service';
import { WebhooksModule } from './webhooks/webhooks.module';

@Module({
  imports: [AppModule, UsersModule, AuthModule, CompaniesModule, RolesModule, ArticlesModule, WebhooksModule],
  controllers: [AppController, UsersController, AuthController, RolesController, ArticlesController],
  /**
   * For remaider: 
   * APP_PIPE is a token that represents the global pipe instance. We can use it to override the default global pipe with our custom pipe.
   * 
   */
  providers: [{provide: APP_PIPE, useClass: ValidationPipe }, AppService, PrismaService, UsersService, AuthService, ArticlesService, RolesService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RoutesMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    })
  }
}
