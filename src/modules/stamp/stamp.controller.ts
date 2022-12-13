import { Stamp } from '@/database/entities/Stamp.entity';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { StampService } from './stamp.service';

@Controller('stamp')
@Controller('stamp')
@ApiTags('Stamps')
@ApiBearerAuth()
// @UseGuards(AuthorizationGuard)
// @serialize(AlbumDto)
export class StampController {
    constructor(
        private stampService: StampService,
      ) {}
    
      @Post()
      async createAddress(
        @Body() stampDto: any,
        @Res() res,
      ): Promise<Stamp> {
        return res.json(await this.stampService.generateStamp(stampDto));
      }
}
