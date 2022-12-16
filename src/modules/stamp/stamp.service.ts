import { Album } from '@/database/entities/Album.entity';
import { Player } from '@/database/entities/Player.entity';
import { Stamp } from '@/database/entities/Stamp.entity';
import { User } from '@/database/entities/User.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStampDto } from './dtos/CreateStamp.dto';
import { GenerateStampDto } from './dtos/GenerateStamp.dto';

@Injectable()
export class StampService {
  constructor(
    @InjectRepository(Stamp)
    private stampRepository: Repository<Stamp>,
    @InjectRepository(Album)
    private albumRepository: Repository<Album>,
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  async generateStamp(GenerateStampDto: GenerateStampDto) {
    try {
      const album: Album = await this.albumRepository.findOneBy({
        UserId: GenerateStampDto.UserId,
      });
      console.log(album);
      if (!album) {
        throw new NotFoundException('Album not found');
      }

      const randomPlayer = await this.playerRepository
        .createQueryBuilder('Players')
        .select()
        .orderBy('RANDOM()')
        .getOne();

      const stampCreated: CreateStampDto = await this.stampRepository.create({
        PlayerId: randomPlayer.Id,
        AlbumId: 1,
      });

      const stamp: Stamp = await this.stampRepository.save(stampCreated);

      return { stamp: stamp, album: album };
    } catch (error) {
      throw error;
    }
  }
}
