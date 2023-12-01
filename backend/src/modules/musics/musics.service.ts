import { Injectable } from '@nestjs/common';
import { CreateMusicDTO } from './dtos/create-music.dto';

@Injectable()
export class MusicsService {
  create(data: CreateMusicDTO) {
    return 'music created';
  }

  findAll() {
    return 'all musics found';
  }

  findOne(id: string) {
    return 'music found';
  }
}
