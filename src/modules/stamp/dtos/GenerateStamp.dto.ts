import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GenerateStampDto {
  @ApiProperty({ type: Number, example: 2, description: 'User Id' })
  @IsNumber()
  @IsNotEmpty()
  UserId: number;
}
