import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AddPostDto } from './dto/add-post.dto';
import { DeletePostDto } from './dto/delete-post.dto';
import { EditPostDto } from './dto/edit-post.dto';
import { PostsEntity } from './entities/post.entity';
import { PostsService } from './posts.service';

@ApiTags('Posts')
@UseGuards(JwtAuthGuard)
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({ status: 200, type: PostsEntity, isArray: true })
  @Get()
  getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @ApiOperation({ summary: 'Add post' })
  @ApiResponse({ status: 200, type: PostsEntity, description: 'Added post' })
  @Post()
  addPost(@Body() dto: AddPostDto, @Req() req: Request) {
    return this.postsService.addPost(dto, req);
  }

  @ApiOperation({ summary: 'Edit post' })
  @ApiResponse({ status: 200, type: PostsEntity, description: 'Edited post' })
  @Put()
  editPost(@Body() dto: EditPostDto, @Req() req: Request) {
    return this.postsService.editPost(dto, req);
  }

  @ApiOperation({ summary: 'Delete post' })
  @ApiResponse({ status: 200, type: PostsEntity, description: 'Deleted post' })
  @Delete()
  deletePost(@Body() dto: DeletePostDto, @Req() req: Request) {
    return this.postsService.deletePost(dto, req);
  }
}
