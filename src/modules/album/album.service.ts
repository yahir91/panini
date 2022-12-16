import { Album } from '@/database/entities/Album.entity';
import { Player } from '@/database/entities/Player.entity';
import { Stamp } from '@/database/entities/Stamp.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PageMetaDto } from '../pagination/dtos/page-meta.dto';
import { PageDto } from '../pagination/dtos/Page.dto';
import { PageOptionsDto } from '../pagination/dtos/PageOptions.dto';

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

  public async getUsers(
    pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<Album>> {
    const queryBuilder = this.albumRepository.createQueryBuilder('Album');

    queryBuilder
      .orderBy('album.createdAt', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  }
}
