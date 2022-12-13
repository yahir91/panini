import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { configuration } from './configuration';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: configuration().db.type as any,
  host: configuration().db.host,
  port: configuration().db.port,
  username: configuration().db.username,
  password: configuration().db.password,
  database: configuration().db.database,
  entities: ['src/database/**/*.entity.{js,ts}'],
  migrationsTableName: 'migrations',
  migrations: ['src/database/migrations/**/*{.ts,.js}'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: false,
  logging: false,
  migrationsRun: true,
};

export const dataSource = new DataSource(typeOrmConfig as DataSourceOptions);
