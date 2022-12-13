import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { configuration } from './configuration';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => {
    return {
      type: configuration().db.type as any,
      host: configuration().db.host,
      port: configuration().db.port,
      username: configuration().db.username,
      password: configuration().db.password,
      database: configuration().db.database,
      entities: ['dist/database/entities/*.entity.js'],
      migrationsTableName: 'migrations',
      migrations: ['dist/database/migrations/*.js'],
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      migrationsRun: true,
      synchronize: false,
      logging: false,
      ssl:
        configService.get<string>('VAR_DB_SSL') === 'true'
          ? { rejectUnauthorized: false }
          : false,
    } as any;
  },
};
