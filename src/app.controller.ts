import { Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('goodbye')
  getGoodbye(): string {
    return this.appService.getGoodbye();
  }

  @Post('hello-user')
  PostHelloToUser(@Query() query): string {
    return query.name ? `Hello ${query.name}` : 'Hello';
    // return this.appService.sayHelloToTheUser();
  }
}
