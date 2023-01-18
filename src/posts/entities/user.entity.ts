import { Users } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UsersEntity implements Users {
  @ApiProperty({ example: 1 })
  id: number;

  username: string;

  @ApiProperty({ example: 'Firstname' })
  firstName: string;

  @ApiProperty({ example: 'Lastname' })
  lastName: string;

  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
