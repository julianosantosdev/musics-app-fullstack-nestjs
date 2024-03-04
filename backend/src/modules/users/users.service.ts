import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.userRepository.findByMail(createUserDto.email);

    if (findUser) {
      throw new ConflictException('This User Already Exists!');
    }

    const user = await this.userRepository.create(createUserDto);
    return user;
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: string) {
    const findUser = await this.userRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException('User Not Found!');
    }
    return await this.userRepository.findOne(id);
  }

  async findByEmail(email: string) {
    const findUser = await this.userRepository.findByMail(email);

    return findUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.userRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException('User Not Found!');
    }
    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    const findUser = await this.userRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException('User Not Found!');
    }
    return this.userRepository.delete(id);
  }
}
