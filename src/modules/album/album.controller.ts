import { Album } from '@/database/entities/Album.entity';
import { Param } from '@nestjs/common';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { serialize } from 'v8';
import { AlbumService } from './album.service';

@Controller('album')
@ApiTags('Album')
@ApiBearerAuth()
// @UseGuards(AuthorizationGuard)
// @serialize(AlbumDto)
export class AlbumController {
  constructor(private albumService: AlbumService) {}

  @Get('/:id')
  async findbyId(@Param('id') id: number): Promise<Album> {
    return await this.albumService.findByUserId(id);
  }
}
