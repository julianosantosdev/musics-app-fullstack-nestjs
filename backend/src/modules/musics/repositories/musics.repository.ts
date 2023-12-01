import { CreateMusicDTO } from '../dtos/create-music.dto';
import { Music } from '../entities/music.entity';

export interface MusicsRepository {
  create(data: CreateMusicDTO): Promise<Music>;
  findAll(): Promise<Music[]>;
  findOne(id: string): Promise<Music>;
}
