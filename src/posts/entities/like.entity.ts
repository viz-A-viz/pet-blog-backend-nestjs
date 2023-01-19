import { Likes } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class LikesEntity implements Likes {
  id: number;

  @ApiProperty({ example: 1 })
  userId: number;

  postId: number;
  commentId: number;
  createdAt: Date;
  updatedAt: Date;
}
