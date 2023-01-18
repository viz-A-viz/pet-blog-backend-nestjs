import { ApiProperty } from '@nestjs/swagger';

export class EditPostDto {
  @ApiProperty()
  idEdit: number;

  @ApiProperty()
  titleEdit: string;

  @ApiProperty()
  textEdit: string;
}
