import React from 'react';
import useAxios from './useAxios';
import { useMutation } from '@tanstack/react-query';

const useSendComment =(postId) => {
    const axiosSecure = useAxios()
   const sendLikeIntoPost = async(body)=>{
    console.log(body,"under send comment")
      const result = await axiosSecure.post(`/posts/${postId}/comment`, body)
      return result
   }
   const { isPending, error, data,isLoading , mutateAsync } = useMutation({
    mutationKey: ['postComment', postId],
   mutationFn: sendLikeIntoPost,
    staleTime: 1000 * 60 * 5,

  })

  return {
    isPending,
    error,
    data,
    isLoading,
    mutateAsync,
  }

};


export default useSendComment;