import { Controller, Get, Render } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  @Render('index')
  root() {
    return {
      title: 'Nameless - API',
      env: this.configService.get<string>('VAR_ENV_NAME'),
      port: this.configService.get<string>('VAR_APP_PORT'),
      swagger: /true/i.test(
        this.configService.get<string>('VAR_ALLOW_SWAGGER'),
      ),
    };
  }
}
