import { Album } from '@/database/entities/Album.entity';
import { Player } from '@/database/entities/Player.entity';
import { Stamp } from '@/database/entities/Stamp.entity';
import { User } from '@/database/entities/User.entity';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { Repository } from 'typeorm';
import { promisify } from 'util';
import { CreateUserDto } from './dtos/CreateUser.dto';

const scrypt = promisify(_scrypt);
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Stamp)
    private stampRepository: Repository<Stamp>,
    @InjectRepository(Album)
    private albumRepository: Repository<Album>,
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async signup(createUserDto: CreateUserDto) {
    try {
      const user = await this.userRepository.findOneBy({
        FullName: createUserDto.FullName,
      });
      if (user) {
        throw new BadRequestException('user in use');
      }

      const salt = randomBytes(8).toString('hex');
      const hash = (await scrypt(createUserDto.Password, salt, 32)) as Buffer;
      const hasedPassword = salt + '.' + hash.toString('hex');

      const newUser: CreateUserDto = await this.userRepository.create({
        FullName: createUserDto.FullName,
        Password: hasedPassword,
      });

      const result = await this.userRepository.save(newUser);

      const newAlbum = await this.albumRepository.create({
        User: result,
        UserId: result.Id,
      });

      const album = await this.albumRepository.save(newAlbum);
    } catch {}
  }
}
