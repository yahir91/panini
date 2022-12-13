import { Album } from '@/database/entities/Album.entity';
import { Player } from '@/database/entities/Player.entity';
import { Stamp } from '@/database/entities/Stamp.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StampController } from './stamp.controller';
import { StampService } from './stamp.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player, Album, Stamp]),
  ],
  controllers: [StampController],
  providers: [StampService]
})
export class StampModule {}
