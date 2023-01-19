export class AddCommentDto {
  postId: number;
  parentId?: number;
  text: string;
}
