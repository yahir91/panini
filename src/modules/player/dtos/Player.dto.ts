import { Expose } from 'class-transformer';
import { Countries } from '@/database/entities/enums';

export class PlayerDto {
  @Expose()
  Id: number;

  @Expose()
  FullName: string;

  @Expose()
  Country: Countries;
}
