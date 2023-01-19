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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CommentsService } from './comments.service';
import { AddCommentDto } from './dto/add-comment.dto';
import { DeleteCommentDto } from './dto/delete-comment.dto';

@UseGuards(JwtAuthGuard)
@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get()
  getPostComments(@Query('id') id: string) {
    return this.commentsService.getPostComments(id);
  }

  @Post()
  addComment(@Body() dto: AddCommentDto, @Req() req: Request) {
    return this.commentsService.addComment(dto, req);
  }

  @Delete()
  DeleteCommentDto(@Body() dto: DeleteCommentDto, @Req() req: Request) {
    return this.commentsService.deleteComment(dto, req);
  }
}
