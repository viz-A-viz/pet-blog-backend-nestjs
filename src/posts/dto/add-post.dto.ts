import { ApiProperty } from '@nestjs/swagger';

export class AddPostDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  text: string;
}
