import { Module } from '@nestjs/common';
import { MusicController } from './musics.controller';
import { MusicsService } from './musics.service';

@Module({
  controllers: [MusicController],
  providers: [MusicsService],
})
export class MusicsModule {}
