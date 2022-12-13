import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { Countries } from './enums';
import { Stamp } from './Stamp.entity';
import { User } from './User.entity';

@Entity({ name: 'Players' })
export class Player extends BaseEntity {
  @OneToMany(() => Stamp, (stamp) => stamp.Player)
  Stamps: Stamp[];

  @Column({ type: 'varchar', length: 100, nullable: false })
  FullName: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  Country: Countries;
}
