import { ApiProperty } from '@nestjs/swagger';

export class LikePostDto {
  @ApiProperty()
  postId: number;

  @ApiProperty()
  userId: number;
}