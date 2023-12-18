import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMusicDTO } from './dtos/create-music.dto';
import { MusicsRepository } from './repositories/musics.repository';

@Injectable()
export class MusicsService {
  constructor(private musicRepository: MusicsRepository) {}

  create(data: CreateMusicDTO) {
    return this.musicRepository.create(data);
  }

  findAll() {
    return this.musicRepository.findAll();
  }

  async findOne(id: string) {
    const music = await this.musicRepository.findOne(id)

    if(!music) {
      throw new NotFoundException("Music Not Found!")
    }
    
    return this.musicRepository.findOne(id)
  }
}
