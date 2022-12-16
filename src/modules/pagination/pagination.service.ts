import { User } from '@/database/entities/User.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageDto, PageMetaDto, PageOptionsDto } from 'src/common/dtos';
import { Repository } from 'typeorm';
import { UserDto } from '../dtos/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public async getUsers(
    pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<UserDto>> {
    const queryBuilder = this.userRepository.createQueryBuilder('user');

    queryBuilder
      .orderBy('user.createdAt', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  }
}
