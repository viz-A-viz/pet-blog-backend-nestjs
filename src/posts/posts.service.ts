import { Injectable, Request } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AddPostDto } from './dto/add-post.dto';
import { DeletePostDto } from './dto/delete-post.dto';
import { EditPostDto } from './dto/edit-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPosts() {
    const posts = await this.prisma.posts.findMany({
      include: {
        Users: {
          select: { id: true, firstName: true, lastName: true },
        },
        _count: {
          select: { Likes: true },
        },
        Likes: {
          select: { userId: true },
        },
      },
    });
    return posts;
  }

  async addPost(dto: AddPostDto, req: Request) {
    const { user } = req;
    try {
      const post = await this.prisma.posts.create({
        data: { ...dto, userId: user.id },
        include: {
          Users: {
            select: { id: true, firstName: true, lastName: true },
          },
          _count: {
            select: { Likes: true },
          },
          Likes: {
            select: { userId: true },
          },
        },
      });
      return post;
    } catch (error) {
      return error.message;
    }
  }

  async editPost(dto: EditPostDto, req: Request) {
    const { user } = req;
    try {
      const post = await this.prisma.posts.update({
        where: { id: dto.idEdit, userId: user.id },
        data: { title: dto.titleEdit, text: dto.textEdit },
      });
      return post;
    } catch (error) {
      return error.message;
    }
  }

  async deletePost(dto: DeletePostDto, req: Request) {
    const { user } = req;
    try {
      const post = await this.prisma.posts.delete({
        where: { ...dto, userId: user.id },
      });
      return post;
    } catch (error) {
      return error.message;
    }
  }
}
