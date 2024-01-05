import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMusicDTO } from './dtos/create-music.dto';
import { MusicsRepository } from './repositories/musics.repository';

@Injectable()
export class MusicsService {
  constructor(private musicRepository: MusicsRepository) {}

  async create(data: CreateMusicDTO) {
    return await this.musicRepository.create(data);
  }

  async findAll() {
    return await this.musicRepository.findAll();
  }

  async findOne(id: string) {
    const music = await this.musicRepository.findOne(id);

    if (!music) {
      throw new NotFoundException('Music Not Found!');
    }

    return await this.musicRepository.findOne(id);
  }
}
