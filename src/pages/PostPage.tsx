import axios from "axios";
import React, { FC, useState, useEffect } from "react";
import { IPost } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";

interface PostPageParams {
  [key: string]: string;
  id: string;
}

const PostPage: FC = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const params = useParams<PostPageParams>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get<IPost>(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      setPost(response.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <button onClick={() => navigate("/posts")}>Back</button>
      <h1>PostPage</h1>
      <h2>{post?.id}</h2>

      <h2>{post?.title}</h2>
      <br />
      <p>{post?.body}</p>
      <br />
      <p>UserId: {post?.userId}</p>
      <br />
    </div>
  );
};

export default PostPage;
