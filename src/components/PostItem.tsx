import React, { FC } from 'react';
import { IPost } from '../types/types';


interface PostItemProps {
    post: IPost,
    onClick: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, onClick}) => {
  return (
    <div style={{marginBottom: '20px'}} onClick={() => onClick(post)}>
        {post.id}. {post.title}
    </div>
  )
}

export default PostItem