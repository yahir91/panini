import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String, example:'Yahir Cardona', description: 'FullName' })
  @IsString()
  @IsNotEmpty()
  FullName: string;

  @ApiProperty({ type: String, description: 'Password' })
  @IsString()
  @IsNotEmpty()
  Password: string;
}
