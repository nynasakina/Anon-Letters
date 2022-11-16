import "./posts.css";
import Post from "../post/Post.js";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post key={p} post={p} />
      ))}
    </div>
  );
};

export default Posts;
