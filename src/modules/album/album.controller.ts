import { Album } from '@/database/entities/Album.entity';
import { Stamp } from '@/database/entities/Stamp.entity';
import { Param, Query } from '@nestjs/common';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { serialize } from 'v8';
import { PageDto } from '../pagination/dtos/Page.dto';
import { PageOptionsDto } from '../pagination/dtos/PageOptions.dto';
import { StampDto } from '../stamp/dtos/Stamp.dto';
import { AlbumService } from './album.service';

@Controller('album')
@ApiTags('Album')
@ApiBearerAuth()
// @UseGuards(AuthorizationGuard)
// @serialize(AlbumDto)
export class AlbumController {
  constructor(private albumService: AlbumService) {}

  @Get('/:id')
  async findbyId(
    @Param('id') id: number,
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<Stamp>> {
    return await this.albumService.getAlbum(id, pageOptionsDto);
  }
}
