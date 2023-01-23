import { ApiProperty } from '@nestjs/swagger';

export class AddCommentDto {
  @ApiProperty()
  postId: number;

  @ApiProperty()
  parentId?: number;

  @ApiProperty()
  text: string;
}
