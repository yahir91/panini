import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { serialize } from 'v8';
import { AlbumService } from './album.service';

@Controller('album')
@ApiTags('Album')
@ApiBearerAuth()
// @UseGuards(AuthorizationGuard)
// @serialize(AlbumDto)
export class AlbumController {
    constructor(
        private albumService: AlbumService,
      ) {}


}
