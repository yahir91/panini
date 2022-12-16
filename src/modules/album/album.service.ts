import { Album } from '@/database/entities/Album.entity';
import { Player } from '@/database/entities/Player.entity';
import { Stamp } from '@/database/entities/Stamp.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PageMetaDto } from '../pagination/dtos/page-meta.dto';
import { PageDto } from '../pagination/dtos/Page.dto';
import { PageOptionsDto } from '../pagination/dtos/PageOptions.dto';
import { StampDto } from '../stamp/dtos/Stamp.dto';

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

  async getAlbum(
    id: number,
    pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<Stamp>> {
    const album: Album = await this.albumRepository.findOneBy({
      UserId: id,
    });
    if (!album) {
      throw new NotFoundException('Album not found');
    }
    const queryBuilder = this.stampRepository.createQueryBuilder('stamp');

    queryBuilder
      .where("stamp.AlbumId = :id", { id: album.Id })
      .leftJoinAndSelect('stamp.Player', 'Player')
      .orderBy('Player.countries', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  }
}
