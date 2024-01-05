import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateMusicDTO {
  @IsString()
  name: string;

  @IsString()
  album: string;

  @IsString()
  artist: string;

  @IsString()
  genre: string;

  @IsString()
  @MinLength(4)
  year: string;

  @IsString()
  @IsOptional()
  cover_image: string | null;

  @IsString()
  @IsOptional()
  music_url: string | null;

  @IsString()
  user_id: string;
}
