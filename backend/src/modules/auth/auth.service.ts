import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(userEmail: string, userPassword: string) {
    const user = await this.userService.findByEmail(userEmail);

    if (user) {
      const passMatch = await compare(userPassword, user.password);
      if (passMatch) {
        return { email: user.email };
      } else {
        return null;
      }
    }

    return null;
  }
}
