import React, { useEffect, useRef, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { getTimeDetails } from '../../../utils/Time';
import { Link } from 'react-router';
import Avatar from '../avatar/Avatar';

const Article = ({post,seViewedCount}) => {


    const ref = useRef()
   const [showMore,setShowMore] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          seViewedCount((prev) => prev + 1);
          observer.unobserve(ref.current); // avoid multiple counts
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  console.log(`${import.meta.env.VITE_SERVER_URL}/${post?.image}`)

    return (
        <article ref={ref}  className="border-b pb-4 mb-4 max-w-[560px] mx-auto border rounded-md">
          {/* Post Header */}
          <div className="flex items-center p-3">
            <Link to={`/profile/${post?.user?._id}`}> <Avatar avatar={post?.user?.avatar}/>
            </Link>
          
            <div className="ml-2">
              <Link to={`/profile/${post?.user?._id}`} className="font-semibold text-sm">
                Sumit Saha
              </Link>
              <span className="text-gray-500 text-xs"> • {getTimeDetails(post?.createdAt)}</span>
            </div>
          </div>
          {/* Post Image */}  
          {
            post?.image && <div className="relative">
            <Link to={`/post-details/${post?._id}`}>
              <img
                src={`${import.meta.env.VITE_SERVER_URL}/${post?.image}`}
                alt="Post image"
                className="w-full object-cover max-h-[1000px]"
              />
            </Link>
          </div>
          }
          
          {/* Post Actions */}
          <div className="flex justify-between p-3">
            <div className="flex space-x-4">
              <button className="like-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-zinc-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-zinc-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
            <button></button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-zinc-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
          {/* Likes */}
          <div className="px-3">
            <div className="flex items-center">
              <div className="h-6 flex -space-x-2">
                <img
                  src="./assets/users/user-1.png"
                  alt="User avatar"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="./assets/users/user-2.png"
                  alt="User avatar"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="./assets/users/user-3.png"
                  alt="User avatar"
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <p className="text-sm ml-2">
                <span className="font-semibold">{post?.likes.length} likes</span>
              </p>
            </div>
          </div>
          {/* Caption */}
          <div className="px-3 mt-2">
            <p className="text-sm">
              {
                showMore && <span className="font-semibold">{post?.caption}{" "}</span>
              }
              {
                !showMore && <span className="font-semibold">{post?.caption?.length < 200 ? post?.caption:  post?.caption?.slice(0, 150)}</span>
              }
              
              {
               post?.caption?.length > 200 &&<button onClick={() => setShowMore(!showMore)} className="text-gray-500 text-sm">{showMore ? ' show less...' : '..show more'}</button>
              }
              
            </p>
          </div>
          {/* Comments */}
          {
            post?.commentsCount > 0 && <div className="px-3 mt-1">
            <button className="text-gray-500 text-sm">View all {post?.commentsCount} comments</button>
          </div>
          }
          
          {/* Add Comment */}
          <div className="px-3 mt-2 flex justify-between items-center">
            <input
              type="text"
              placeholder="Add a comment..."
              className="text-sm w-full outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-zinc-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
              <path d="M6 12h16" />
            </svg>
          </div>
        </article>  
    );
};

export default Article;