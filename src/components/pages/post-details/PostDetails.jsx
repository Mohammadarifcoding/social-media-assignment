import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useGetPostDetails from './../../../hooks/useGetPostDetails';
import { getTimeDetails } from './../../../utils/Time';
import Avatar from '../../shared/avatar/Avatar';
import { useAuth } from '../../../store';
import useSendLike from '../../../hooks/useSendLike';
import useSendComment from '../../../hooks/useSendComment';
import { IoMdSend } from 'react-icons/io';

const PostDetails = () => {
    const {id} = useParams()
    console.log(id)
    const {data,isLoading,refetch} = useGetPostDetails(id)
    const {mutateAsync : commentMutate} = useSendComment(id)
    const {mutateAsync:likeMutate,} = useSendLike(id)
    const {auth} = useAuth((s)=> s)
    const [like,setLike] = useState()
    const [likesCount,setLikeCount] = useState()
    const [comment, setComment] = useState('');
const [commentLoading, setCommentLoading] = useState(false);
    console.log(like)
    const toggoleLike = async()=>{
      try{
setLike(prev => !prev);
setLikeCount(prev => like ? prev - 1 : prev + 1);
        await likeMutate()

      }
      catch(err){
        setLike(prev => !prev);
  setLikeCount(prev => like ? prev + 1 : prev - 1);
      }

    }
    useEffect(() => {
  if (!isLoading && data?.likes) {
    setLike(data?.likes?.find(item => item?._id == auth.user._id) ? true : false);
    setLikeCount(data.likes.length);
  }
}, [data, isLoading, auth.user._id]);

const addComment = async (e) => {
  e.preventDefault(); // stop full-page reload
  if (!comment.trim()) return; // prevent empty comment

  try {
    setCommentLoading(true);
    await commentMutate({text: comment});
    setComment('');
    refetch(); // reload comments after success
  } catch (err) {
    console.error("Failed to add comment", err);
  } finally {
    setCommentLoading(false);
  }
};
    return (
        <div>

  <div className="max-w-6xl w-full py-10 ml-[var(--sidebar-width)] px-4">
    {/* Post Details Section */}
    <div className="bg-white border rounded-sm overflow-hidden mb-8 mx-auto max-w-5xl">
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Post Image */}
        <div className="w-full md:w-1/2 bg-black flex items-center">
          <img src={`${import.meta.env.VITE_SERVER_URL}/${data?.image}`} alt="Post image" className="w-full post-image" />
        </div>
        {/* Right Side - Post Info and Comments */}
        <div className="w-full md:w-1/2 flex flex-col">
          {/* Post Header */}
          <div className="flex items-center justify-between p-3 border-b">
            <a href={`/profile/${data?.user?._id}`}>
              <div className="flex items-center">
<Avatar avatar={data?.user?.avatar}/>
                <div className="ml-2">
                  <div className="flex items-center">
                    <span className="font-semibold text-sm">{data?.user?.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[10px] text-gray-600">{getTimeDetails(data?.createdAt)}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="p-3">
            <p className="text-sm ">
             {data?.caption}
            </p>
          </div>
          {/* Comments Section */}
          <div className="comments-section flex-grow p-3 border-b">
            {/* Post Owner Comment */}
            <h3 className="font-bold pb-4">Comments</h3>
            {
              data?.comments?.length > 0 && data?.comments?.map(comment => (
                <div className="flex mb-4 gap-1">
                  <Avatar avatar={comment?.user?.avatar}/>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="font-semibold text-sm">{comment?.user?.name}</span>
                      <span className="text-xs text-gray-500 ml-2">{getTimeDetails(comment?.createdAt)}</span>
                    </div>
                    <p className="text-sm mt-2 text-gray-800">
                      {comment?.text}
                    </p>
                  </div>
                </div>
              ))
            }
            {/* Comment One */}
        
          </div>
          {/* Post Actions */}
          <div className="p-3 border-b">
            <div className="flex justify-between mb-2">
              <div className="flex space-x-4">
                <button onClick={() => toggoleLike()}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={like ? "red" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Likes */}
            <div className="mb-1">
              <p className="text-sm font-semibold">{likesCount} likes</p>
            </div>

          </div>
          {/* Add Comment */}
          <div className="p-3 flex items-center  gap-2">
<Avatar avatar={auth?.user?.avatar}/>
                 <form onSubmit={addComment} className="flex-1 flex items-center justify-between">
  <input
    type="text"
    placeholder="Add a comment..."
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    className="text-sm w-full outline-none"
  />
  <button type="submit" disabled={commentLoading}>
<IoMdSend />
  </button>
</form>

          </div>
        </div>
      </div>
    </div>
    {/* More Posts Section */}
    <div className="mb-8 mx-auto max-w-5xl">
      <h2 className="text-sm text-gray-500 font-normal mb-4">More posts from <span className="font-semibold text-black">
          Learn with Sumit</span></h2>
      <div className="grid grid-cols-3 gap-1">
        {/* Grid Item 6 */}
        <a href="./post-details.html">
          <div className="relative">
            <img src="./assets/articles/post-7.jpg" alt="Grid image" className="w-full grid-image" />
          </div>
        </a>
      </div>
    </div>
</div>

        </div>
    );
};

export default PostDetails;