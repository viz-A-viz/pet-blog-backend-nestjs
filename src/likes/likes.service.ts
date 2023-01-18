import { Injectable, Request } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LikePostDto } from './dto/like-post.dto';
import { UnlikePostDto } from './dto/unlike-post.dto';

@Injectable()
export class LikesService {
  constructor(private readonly prisma: PrismaService) {}

  async likePost(dto: LikePostDto, req: Request) {
    const { user } = req;
    try {
      await this.prisma.likes.create({ data: { ...dto, userId: user.id } });
      return 'Post liked';
    } catch (error) {
      return error.message;
    }
  }

  async unlikePost(dto: UnlikePostDto, req: Request) {
    const { user } = req;
    try {
      const like = await this.prisma.likes.findFirst({
        where: { ...dto, userId: user.id },
      });
      if (like) {
        const { id } = like;
        await this.prisma.likes.delete({ where: { id } });
        return 'Post unliked';
      }
      return 'Like is undefined';
    } catch (error) {
      return error.message;
    }
  }
}
