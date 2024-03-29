import { Module } from '@nestjs/common';
import { MusicsModule } from './modules/musics/musics.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [MusicsModule, UsersModule, AuthModule],
})
export class AppModule {}
