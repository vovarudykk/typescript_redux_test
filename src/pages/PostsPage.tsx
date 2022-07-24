import axios from "axios";
import React, { useState, useEffect } from "react";
import List from "../components/List";
import PostItem from "../components/PostItem";
import { IPost } from "../types/types";
import { useNavigate } from "react-router-dom";

const PostsPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get<IPost[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>PostPage</h1>

      <List
        items={posts}
        renderItem={(post: IPost) => (
          <PostItem
            key={post.id}
            post={post}
            onClick={(post) => navigate(`/post/${post.id}`)}
          />
        )}
      />
    </div>
  );
};

export default PostsPage;
