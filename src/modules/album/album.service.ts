import { Album } from '@/database/entities/Album.entity';
import { Player } from '@/database/entities/Player.entity';
import { Stamp } from '@/database/entities/Stamp.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(Stamp)
    private stampRepository: Repository<Stamp>,
    @InjectRepository(Album)
    private albumRepository: Repository<Album>,
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  async findByUserId(id: number) {
    const album = await this.albumRepository.findOne({
      where: { UserId: id },
      relations: {
        Stamps: true,
      },
    });
    return album;
  }
}
