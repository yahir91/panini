import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { Stamp } from './Stamp.entity';
import { User } from './User.entity';

@Entity({ name: 'Album' })
export class Album extends BaseEntity {
  @OneToOne(() => User)
  @JoinColumn({ name: 'UserId', referencedColumnName: 'Id' })
  User: User;

  @Column({ nullable: false })
  UserId: number;

  @OneToMany(() => Stamp, (stamp) => stamp.Album)
  Stamps: Stamp[];
}
