import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddPostDto } from './dto/add-post.dto';
import { DeletePostDto } from './dto/delete-post.dto';
import { EditPostDto } from './dto/edit-post.dto';
import { PostsEntity } from './entities/post.entity';
import { PostsService } from './posts.service';

@ApiTags('Posts')
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
  addPost(@Body() dto: AddPostDto) {
    return this.postsService.addPost(dto);
  }

  @ApiOperation({ summary: 'Edit post' })
  @ApiResponse({ status: 200, type: PostsEntity, description: 'Edited post' })
  @Put()
  editPost(@Body() dto: EditPostDto) {
    return this.postsService.editPost(dto);
  }

  @ApiOperation({ summary: 'Delete post' })
  @ApiResponse({ status: 200, type: PostsEntity, description: 'Deleted post' })
  @Delete()
  deletePost(@Body() dto: DeletePostDto) {
    return this.postsService.deletePost(dto);
  }
}
