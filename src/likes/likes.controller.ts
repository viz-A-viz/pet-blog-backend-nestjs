import { Body, Controller, Delete, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LikePostDto } from './dto/like-post.dto';
import { UnlikePostDto } from './dto/unlike-post.dto';
import { LikesService } from './likes.service';

@ApiTags('Likes')
@Controller('likes')
export class LikesController {
  constructor(private likesService: LikesService) {}

  @ApiOperation({ summary: 'Like post' })
  @ApiResponse({ status: 200, type: String })
  @Post()
  likePost(@Body() dto: LikePostDto) {
    return this.likesService.likePost(dto);
  }

  @ApiOperation({ summary: 'Unlike post' })
  @ApiResponse({ status: 200, type: String })
  @Delete()
  unlikePost(@Body() dto: UnlikePostDto) {
    return this.likesService.unlikePost(dto);
  }
}
