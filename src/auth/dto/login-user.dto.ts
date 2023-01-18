import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty()
  readonly password: string;

  @ApiProperty()
  readonly email: string;
}
