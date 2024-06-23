import { makeRequest } from "../../axios";
import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";

const Posts = ({userId}) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      makeRequest.get("/posts?userId="+userId).then((res) => {
        return res.data;
      })
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {"Something went wrong"}</div>;
  if (!data) return <div>No data available</div>;
  return (
    <div className="posts">
      {data.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
