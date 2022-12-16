import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class UserDto {
  @ApiProperty()
  FullName: string;

  @ApiProperty()
  @Type(() => AlbumDto)
  Album?: AlbumDto;}
