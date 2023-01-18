import { ApiProperty } from '@nestjs/swagger';
import { Posts } from '@prisma/client';
import { LikesEntity } from 'src/posts/entities/like.entity';
import { UsersEntity } from 'src/posts/entities/user.entity';

export class PostsEntity implements Posts {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'title of post' })
  title: string;

  @ApiProperty({ example: 'text of post' })
  text: string;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: new Date() })
  createdAt: Date;

  @ApiProperty({ example: new Date() })
  updatedAt: Date;

  @ApiProperty({ type: UsersEntity, isArray: true })
  Users: [];

  @ApiProperty({ type: LikesEntity, isArray: true })
  Likes: [];

  @ApiProperty({ example: { Likes: 3 } })
  _count: { Likes: number };
}
