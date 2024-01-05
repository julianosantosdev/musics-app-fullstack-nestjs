import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateUserDto } from '../../dto/update-user.dto';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const user = new User();
    Object.assign(user, { ...data });
    const newUser = await this.prisma.user.create({ data: { ...user } });
    return newUser;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findOne(id: string): Promise<User> {
    const user = (await this.prisma.user.findUnique({
      where: {
        id,
      },
    })) as User;

    return user;
  }

  async findByMail(email: string): Promise<User> {
    const user = (await this.prisma.user.findUnique({
      where: {
        email,
      },
    })) as User;

    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const userToUpdate = (await this.prisma.user.update({
      where: {
        id,
      },
      data: { ...data },
    })) as User;

    return userToUpdate;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
