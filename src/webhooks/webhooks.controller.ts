import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('webhook')
export class WebhooksController {

  @Post('/:status')
  acceptRequest001(@Param('status') status: String, String, @Body() body: unknown) {
    console.log(body, status);
  }
}
