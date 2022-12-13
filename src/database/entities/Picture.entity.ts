import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { Stamp } from './Stamp.entity';
import { User } from './User.entity';

@Entity({ name: 'Picture' })
export class Picture extends BaseEntity {
  @Column({ nullable: false })
  stampId: number;

  @OneToOne(() => Stamp, (stamp) => stamp.Id)
  @JoinColumn({ name: 'stampId', referencedColumnName: 'Id' })
  Stamp: Stamp | null;

  @Column()
  public Url?: string;

  @Column()
  public Key: string;
}
