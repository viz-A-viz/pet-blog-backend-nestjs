export const includedComments = {
  id: true,
  text: true,
  postId: true,
  parentId: true,
  userId: true,
  createdAt: true,
  _count: {
    select: { Likes: true },
  },
  user: {
    select: { firstName: true, lastName: true },
  },
  comments: {
    select: {
      id: true,
      text: true,
      postId: true,
      parentId: true,
      userId: true,
      createdAt: true,
      _count: {
        select: { Likes: true },
      },
      user: {
        select: { firstName: true, lastName: true },
      },
      comments: {
        select: {
          id: true,
          text: true,
          postId: true,
          parentId: true,
          userId: true,
          createdAt: true,
          _count: {
            select: { Likes: true },
          },
          user: {
            select: { firstName: true, lastName: true },
          },
          comments: {
            select: {
              id: true,
              text: true,
              postId: true,
              parentId: true,
              userId: true,
              createdAt: true,
              _count: {
                select: { Likes: true },
              },
              user: {
                select: { firstName: true, lastName: true },
              },
              comments: {
                select: {
                  id: true,
                  text: true,
                  postId: true,
                  parentId: true,
                  userId: true,
                  createdAt: true,
                  _count: {
                    select: { Likes: true },
                  },
                  user: {
                    select: { firstName: true, lastName: true },
                  },
                  comments: {
                    select: {
                      id: true,
                      text: true,
                      postId: true,
                      parentId: true,
                      userId: true,
                      createdAt: true,
                      _count: {
                        select: { Likes: true },
                      },
                      user: {
                        select: { firstName: true, lastName: true },
                      },
                      comments: {
                        select: {
                          id: true,
                          text: true,
                          postId: true,
                          parentId: true,
                          userId: true,
                          createdAt: true,
                          comments: true,
                          _count: {
                            select: { Likes: true },
                          },
                          user: {
                            select: { firstName: true, lastName: true },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
