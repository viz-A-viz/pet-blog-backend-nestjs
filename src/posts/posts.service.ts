import { Injectable } from '@nestjs/common';
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

  async addPost(dto: AddPostDto) {
    try {
      const post = await this.prisma.posts.create({
        data: { ...dto },
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

  async editPost(dto: EditPostDto) {
    try {
      const post = await this.prisma.posts.update({
        where: { id: dto.id },
        data: { title: dto.title, text: dto.text, userId: dto.userId },
      });
      return post;
    } catch (error) {
      return error.message;
    }
  }

  async deletePost(dto: DeletePostDto) {
    try {
      const post = await this.prisma.posts.delete({
        where: { ...dto },
      });
      return post;
    } catch (error) {
      return error.message;
    }
  }
}
