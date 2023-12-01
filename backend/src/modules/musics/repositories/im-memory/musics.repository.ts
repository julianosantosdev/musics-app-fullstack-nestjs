import { CreateMusicDTO } from '../../dtos/create-music.dto';
import { Music } from '../../entities/music.entity';
import { MusicsRepository } from '../musics.repository';

export class MusicInMemoryRepository implements MusicsRepository {
  private database: Music[] = [];

  async create(data: CreateMusicDTO): Promise<Music> {
    const newMusic = new Music();
    Object.assign(newMusic, { ...data });
    this.database.push(newMusic);
    return newMusic;
  }
  async findAll(): Promise<Music[]> {
    return this.database;
  }
  async findOne(id: string): Promise<Music> {
    const music = this.database.find((music) => music.id === id) as Music;
    return music;
  }
}
