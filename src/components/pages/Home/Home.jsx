import React, { useEffect, useRef, useState } from 'react';
import Container from '../../shared/Container/Container';
import { useAuth } from '../../../store';
import useGetPost from '../../../hooks/useGetPost';
import Article from '../../shared/Card/Article';
import LoginModal from '../../shared/Modal/LoginModal';
const limitedUse = 8

const Home = () => {
  const { auth } = useAuth((s) => s);
  console.log(auth);
  const { data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,}  = useGetPost(5)
  console.log(data) 


  const loaderRef = useRef()
  const [viewwedCount ,setViewedCount] = useState(0)
  const [showModal,setShowModal] = useState(false)

  useEffect(()=>{
    const observer = new IntersectionObserver(entries=> {
      const first = entries[0]
      if(first.isIntersecting && hasNextPage && !isFetchingNextPage){
        fetchNextPage()
      }
    },{threshold: 1})

    const current = loaderRef.current

    if(current) observer.observe(current)

    return ()=>{
      if(current) observer.unobserve(current)
    }
  },[hasNextPage,fetchNextPage,isFetchingNextPage])

console.log(viewwedCount)
      useEffect(() => {
  if (!auth.token && viewwedCount > limitedUse) {
   setShowModal(true);
  }

}, [viewwedCount,auth.token]);
  return (
    <Container>
      <div>
        {/* Post 1 */}
        {data?.pages.map(page => page.map((post) => (
<Article key={post?._id} post={post} seViewedCount={setViewedCount}/>
        )))}
        
        {/* Post 1 */}

        <div ref={loaderRef} className='flex justify-center'>
            {isFetchingNextPage ? <p>Loading More</p>: hasNextPage ? <p>Scroll to load more...</p>:<p>No more posts</p>}
        </div>
      <LoginModal show={showModal} onClose={()=> setShowModal(false)}/>
    
      </div>
    </Container>
  );
};

export default Home;
