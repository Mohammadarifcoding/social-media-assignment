import React from 'react';
import useAxios from './useAxios';
import { useMutation } from '@tanstack/react-query';

const useSendLike = (id) => {
    const axiosSecure = useAxios()
   const sendLikeIntoPost = async()=>{
      const result = await axiosSecure.post(`/posts/${id}/like`)
      return result
   }
   const { isPending, error, data,isLoading , mutateAsync } = useMutation({
    mutationKey: ['postLike', id],
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

export default useSendLike;