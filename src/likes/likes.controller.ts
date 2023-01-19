import {
  Body,
  Controller,
  Delete,
  Post,
  Req,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LikePostDto } from './dto/like-post.dto';
import { UnlikePostDto } from './dto/unlike-post.dto';
import { LikesService } from './likes.service';

@ApiTags('Likes')
@UseGuards(JwtAuthGuard)
@Controller('likes')
export class LikesController {
  constructor(private likesService: LikesService) {}

  @ApiOperation({ summary: 'Like post' })
  @ApiResponse({ status: 200, type: String })
  @Post()
  likePost(@Body() dto: LikePostDto, @Req() req: Request) {
    return this.likesService.likePostOrComment(dto, req);
  }

  @ApiOperation({ summary: 'Unlike post' })
  @ApiResponse({ status: 200, type: String })
  @Delete()
  unlikePost(@Body() dto: UnlikePostDto, @Req() req: Request) {
    return this.likesService.unlikePostOrComment(dto, req);
  }
}
