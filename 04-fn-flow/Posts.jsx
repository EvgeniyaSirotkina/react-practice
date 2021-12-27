import { Post } from "./Post";

export function Posts(props) {
  const { posts, removePost } = props;
  
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          removePost={removePost}
        />
      ))}
    </div>
  );
}
