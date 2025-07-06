import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import usePublicAxios from './usePublicAxios';

const useGetPost = (limit) => {
    const axiosPublic = usePublicAxios()
const fetchPosts = async ({pageParam = 1}) => {
    const res = await axiosPublic.get('/posts/?' + `page=${pageParam}&limit=${limit}`)
    return res.data
  }
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    initialPageParam: 1,
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
    getNextPageParam: (lastPage, pages) => {
       if(lastPage.length > 0){
        
        return pages.length + 1
       }
       return undefined 
    },
  })
  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  }
};

export default useGetPost;