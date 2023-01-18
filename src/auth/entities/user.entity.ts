import { Users } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UsersEntity implements Users {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'user_name' })
  username: string;

  @ApiProperty({ example: 'Firstname' })
  firstName: string;

  @ApiProperty({ example: 'Lastname' })
  lastName: string;

  @ApiProperty({ example: 'example@mail.com' })
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
