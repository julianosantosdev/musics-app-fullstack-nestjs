import { Module } from '@nestjs/common';
import { MusicController } from './musics.controller';
import { MusicsService } from './musics.service';
import { MusicsRepository } from './repositories/musics.repository';
import { MusicInMemoryRepository } from './repositories/im-memory/musics.repository';

@Module({
  controllers: [MusicController],
  providers: [MusicsService, 
    {provide: MusicsRepository, useClass: MusicInMemoryRepository
    }
  ],
})
export class MusicsModule {}
