import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/database/configuration';
import { UserController } from './modules/user/user.controller';
import { AlbumController } from './modules/album/album.controller';
import { AlbumModule } from './modules/album/album.module';
import { UserModule } from './modules/user/user.module';
import { StampModule } from './modules/stamp/stamp.module';
import { StampController } from './modules/stamp/stamp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/database/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    AlbumModule,
    UserModule,
    StampModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
