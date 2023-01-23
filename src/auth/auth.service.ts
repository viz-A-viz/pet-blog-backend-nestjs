import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { UserType } from 'src/types/User';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  getUser(header: string) {
    const token = header.split(' ')[1];
    if (!token) throw new UnauthorizedException();
    return this.jwtService.verify<UserType>(token);
  }

  async login(dto: LoginUserDto) {
    const user = await this.validateUser(dto);
    return this.generateToken(user);
  }

  async register(dto: RegisterUserDto) {
    const candidate = await this.prisma.users.findUnique({
      where: { email: dto.email },
    });
    if (candidate) {
      throw new HttpException(
        'Email is already registered',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.prisma.users.create({
      data: { ...dto, password: hashPassword },
      select: {
        id: true,
        username: true,
        firstName: true,
        lastName: true,
        email: true,
      },
    });
    return this.generateToken(user);
  }

  private generateToken(user: UserType) {
    const payload = { ...user };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(dto: LoginUserDto) {
    const user = await this.prisma.users.findUnique({
      where: { email: dto.email },
    });
    if (!user) throw new UnauthorizedException('Incorrect email');

    const validPassword = await bcrypt.compare(dto.password, user.password);
    if (!validPassword) throw new UnauthorizedException('Incorrect password');

    const { id, username, firstName, lastName, email } = user;
    return { id, username, firstName, lastName, email };
  }
}
