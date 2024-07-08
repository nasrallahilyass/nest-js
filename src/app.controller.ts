import { Controller, Get, Post, Body } from '@nestjs/common';
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

  @Post('hello')
  // @Body() decorator is used to extract the body of the request
  sayHelloToTheUser(@Body() body : any) : any {
    return body
  }
}



