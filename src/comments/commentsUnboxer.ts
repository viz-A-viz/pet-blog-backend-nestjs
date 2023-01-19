export const commentsUnboxer = (tree) => {
  const stack = [...tree];
  stack.forEach((comment) => (comment.width = 90));
  const result = [];
  while (stack.length) {
    const comment = stack.pop();
    if (comment.comments.length) {
      const answers = comment.comments
        .map((ans) => ({ ...ans, width: comment.width - 10 }))
        .reverse();
      stack.push(...answers);
    }
    result.push(comment);
  }
  result.forEach((comment) => delete comment.comments);
  return result;
};
