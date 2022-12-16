import { StampDto } from '@/modules/stamp/dtos/Stamp.dto';
import { Expose, Type } from 'class-transformer';
import { UserDto } from '../../user/dtos/User.dto';

export class AlbumDto {
  @Expose()
  Id: number;

  @Expose()
  UserId: number;

  @Expose()
  @Type(() => UserDto)
  User: UserDto;

  @Expose()
  @Type(() => StampDto)
  Stamps: StampDto[];
}
