const POSTS = [
  { id: 1, author: "John", body: "Hello world" },
  { id: 2, author: "Mary", body: "Hi, planet!" }
];

export const resolvers = {
  Query: {
    getPost: ({ id }) => {
      return POSTS.find(x => x.id === id);
    },
    getPosts: () => POSTS
  }
};
