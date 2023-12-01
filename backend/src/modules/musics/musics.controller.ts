import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MusicsService } from './musics.service';
import { CreateMusicDTO } from './dtos/create-music.dto';

@Controller('musics')
export class MusicController {
  constructor(private musicsService: MusicsService) {}

  @Post()
  create(@Body() data: CreateMusicDTO) {
    return this.musicsService.create(data);
  }

  @Get()
  findAll() {
    return this.musicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicsService.findOne(id);
  }
}
