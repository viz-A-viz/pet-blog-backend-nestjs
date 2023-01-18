declare module '@nestjs/common' {
  interface Request {
    user: {
      id: number;
      username: string;
      firstName: string;
      lastName: string;
      email: string;
    };
  }
}

export {};
