import { useQuery } from "@tanstack/react-query";
import useAxios from './useAxios';

const useGetPostDetails = (id) => {
    const axiosSecure = useAxios()
   const getPostDetails = async()=>{
      const result = await axiosSecure.get(`/posts/${id}`)
      return result.data
   }
   const { isPending, error, data,isLoading,refetch } = useQuery({
    queryKey: ['postDetails', id],
    queryFn: getPostDetails,
    staleTime: 1000 * 60 * 5
  })

  return {
    isPending,
    error,
    data,
    isLoading,
    refetch
  }

};


export default useGetPostDetails;