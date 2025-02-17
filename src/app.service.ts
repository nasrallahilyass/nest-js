import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  getGoodbye(): string {
    return 'Goodbye World!';
  }

  sayHelloToTheUser(name : string): string {
    return `Hello ${name}!`;
  }
}


