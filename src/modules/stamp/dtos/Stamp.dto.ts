import { Expose, Type } from 'class-transformer';
import { AlbumDto } from '@/modules/album/dtos/album.dto';
import { PlayerDto } from '@/modules/player/dtos/Player.dto';

export class StampDto {
  @Expose()
  Id: number;

  @Expose()
  AlbumId: number;

  @Expose()
  @Type(() => AlbumDto)
  Album?: AlbumDto;

 
  @Expose()
  PlayerId: number;

  @Expose()
  @Type(() => PlayerDto)
  Player: PlayerDto;
}
