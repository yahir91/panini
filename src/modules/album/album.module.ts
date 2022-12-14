import { Album } from '@/database/entities/Album.entity';
import { Player } from '@/database/entities/Player.entity';
import { Stamp } from '@/database/entities/Stamp.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player, Album, Stamp]),
  ],
  controllers: [AlbumController],
  providers: [AlbumService]})
export class AlbumModule {}
