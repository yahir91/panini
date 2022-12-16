import { Expose, Type } from 'class-transformer';
import { CreateCustomerDto } from '../../customer/dtos/CreateCustomer.dto';
import { CreateCleanerDto } from '../../cleaner/dtos/CreateCleaner.dto';
import { ProfilePictureDTO } from '../../profilePicture/dtos/profilePicture.dtos';
import { AddressDto } from '@/modules/address/dtos/Address.dto';

export class StampDto {
  @Expose()
  Id: number;

  @Expose()
  AlbumId: number;

  @Expose()
  @Type(() => AlbumDto)
  Customer?: AlbumDto;

  @Expose()
  @Type(() => CreateCleanerDto)
  Cleaner?: CreateCleanerDto;

  @Expose()
  Phone: string;

  @Expose()
  Email: string;

  @Expose()
  NotificationPreference: boolean;

  @Expose()
  About: string;

  @Expose()
  @Type(() => ProfilePictureDTO)
  ProfilePicture?: ProfilePictureDTO;

  @Expose()
  @Type(() => AddressDto)
  Addresses?: AddressDto[];
}
