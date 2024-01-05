import { Module } from '@nestjs/common';
import { MusicController } from './musics.controller';
import { MusicsService } from './musics.service';
import { MusicsRepository } from './repositories/musics.repository';
import { PrismaService } from 'src/database/prisma.service';
import { MusicsPrismaRepository } from './repositories/prisma/musics.prisma.repository';

@Module({
  controllers: [MusicController],
  providers: [
    MusicsService,
    PrismaService,
    { provide: MusicsRepository, useClass: MusicsPrismaRepository },
  ],
})
export class MusicsModule {}
