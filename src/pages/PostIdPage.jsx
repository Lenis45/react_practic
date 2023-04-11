import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [fetchPostsById, isLoading, error] = useFetching( async(id) => {
      const response =  await PostService.getById(id)
      setPost(response.data);
    })
    useEffect(() => {
      fetchPostsById(params.id)
    }, [])
 
  return (
    <div>
        <h1>Вы открыли страницу с ID = {params.id}</h1>
        {isLoading
            ? <Loader/>
            : <div>{post.id}.{post.title}</div>
        }    
    </div>
  );
};

export default PostIdPage;
