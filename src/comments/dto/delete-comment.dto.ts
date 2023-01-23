import { ApiProperty } from '@nestjs/swagger';

export class DeleteCommentDto {
  @ApiProperty()
  id: number;
}
