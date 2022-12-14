import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateStampDto {
  @ApiProperty({ type: Number, description: 'Player Id' })
  @IsString()
  @IsNotEmpty()
  PlayerId: number;

  @ApiProperty({ type: Number, description: 'Album Id' })
  @IsString()
  @IsNotEmpty()
  AlbumId: number;
}
