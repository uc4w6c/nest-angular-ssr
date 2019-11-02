import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    console.log('API called')
    return 'This action returns all cats';
  }
}
