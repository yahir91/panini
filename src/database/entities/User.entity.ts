import { Column, Entity, Index, OneToMany, OneToOne } from 'typeorm';
import { Album } from './Album.entity';
import { BaseEntity } from './Base.entity';

@Entity({ name: 'Users' })
export class User extends BaseEntity {
  @Index({ unique: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  FullName: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  Password: string;

  @OneToOne(() => Album, (album) => album.User, {
    nullable: true,
  })
  Album?: Album;
}
