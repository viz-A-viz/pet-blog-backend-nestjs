import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CommentsService } from './comments.service';
import { AddCommentDto } from './dto/add-comment.dto';
import { DeleteCommentDto } from './dto/delete-comment.dto';
import { Comments } from '@prisma/client';

@ApiTags('Comments')
@UseGuards(JwtAuthGuard)
@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @ApiOperation({ summary: 'Get posts comments' })
  @Get()
  getPostComments(@Query('id') id: string) {
    return this.commentsService.getPostComments(id);
  }

  @ApiOperation({ summary: 'Add comment to post or comment' })
  @Post()
  addComment(@Body() dto: AddCommentDto, @Req() req: Request) {
    return this.commentsService.addComment(dto, req);
  }

  @ApiOperation({ summary: 'Delete comment' })
  @Delete()
  DeleteCommentDto(@Body() dto: DeleteCommentDto, @Req() req: Request) {
    return this.commentsService.deleteComment(dto, req);
  }
}
