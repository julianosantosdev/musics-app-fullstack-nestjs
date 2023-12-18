import { CreateMusicDTO } from '../dtos/create-music.dto';
import { Music } from '../entities/music.entity';

export abstract class MusicsRepository {
  abstract create(data: CreateMusicDTO): Promise<Music>;
  abstract findAll(): Promise<Music[]>;
  abstract findOne(id: string): Promise<Music>;
}
