import { PrismaService } from 'src/database/prisma.service';
import { CreateMusicDTO } from '../../dtos/create-music.dto';
import { Music } from '../../entities/music.entity';
import { MusicsRepository } from '../musics.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MusicsPrismaRepository implements MusicsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateMusicDTO): Promise<Music> {
    const music = new Music();
    Object.assign(music, { ...data });

    const newMusic = await this.prisma.music.create({
      data: {
        id: music.id,
        name: music.name,
        artist: music.artist,
        album: music.album,
        year: music.year,
        genre: music.genre,
        cover_image: music.cover_image,
        music_url: music.music_url,
        user_id: music.user_id,
      },
    });

    return newMusic;
  }

  findAll(): Promise<Music[]> {
    const musics = this.prisma.music.findMany();
    return musics;
  }

  async findOne(id: string): Promise<Music> {
    const music = (await this.prisma.music.findFirst({
      where: { id },
    })) as Music;
    return music;
  }
}
