import { Album } from '@/database/entities/Album.entity';
import { User } from '@/database/entities/User.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlbumDto } from '../album/dtos/Album.dto';
import { UserDto } from '../user/dtos/User.dto';
import { PageMetaDto } from './dtos/page-meta.dto';
import { PageDto } from './dtos/Page.dto';
import { PageOptionsDto } from './dtos/PageOptions.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Album)
    private albumRepository: Repository<Album>,
  ) {}

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
