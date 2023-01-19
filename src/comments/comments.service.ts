import { Injectable, Request } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { commentsUnboxer } from './commentsUnboxer';
import { AddCommentDto } from './dto/add-comment.dto';
import { DeleteCommentDto } from './dto/delete-comment.dto';
import { includedComments } from './includedComments';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async getPostComments(id: string) {
    const comments = await this.prisma.comments.findMany({
      where: { postId: Number(id), parentId: null },
      select: includedComments,
      orderBy: { updatedAt: 'desc' },
    });
    const unboxedComments = commentsUnboxer(comments);
    return unboxedComments;
  }

  async addComment(dto: AddCommentDto, req: Request) {
    const { user } = req;
    try {
      const comment = await this.prisma.comments.create({
        data: { ...dto, userId: user.id },
        include: {
          _count: {
            select: { Likes: true },
          },
          user: {
            select: { firstName: true, lastName: true },
          },
        },
      });
      return comment;
    } catch (error) {
      return error.message;
    }
  }

  async deleteComment(dto: DeleteCommentDto, req: Request) {
    const { user } = req;
    try {
      const comment = await this.prisma.comments.delete({
        where: { ...dto, userId: user.id },
      });
      return comment;
    } catch (error) {
      return error.message;
    }
  }
}
