import { ApiProperty } from '@nestjs/swagger';

export class EditPostDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  text: string;

  @ApiProperty()
  userId: number;
}
