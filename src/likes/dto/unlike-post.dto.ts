import { ApiProperty } from '@nestjs/swagger';

export class UnlikePostDto {
  @ApiProperty()
  postId: number;
}
