import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Album } from './Album.entity';
import { BaseEntity } from './Base.entity';
import { Countries, Players } from './enums';
import { Picture } from './Picture.entity';
import { Player } from './Player.entity';

@Entity({ name: 'Stamps' })
export class Stamp extends BaseEntity {
  @Column({ nullable: false })
  AlbumId: number;
  
  @ManyToOne(() => Album, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'AlbumId', referencedColumnName: 'Id' })
  Album: Album;

  @OneToOne(() => Picture, (picture) => picture.Stamp, {
    cascade: true,
    eager: true,
  })
  Picture: Picture;

  @Column({ nullable: false })
  PlayerId: number;

  @ManyToOne(() => Player, (player) => player.Id)
  @JoinColumn({ name: 'PlayerId', referencedColumnName: 'Id' })
  Player: Player;
}
