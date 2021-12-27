import { Post } from "./Post";

export function Posts(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <Post key={post.id} title={post.title} />
      ))}
    </div>
  );
}
