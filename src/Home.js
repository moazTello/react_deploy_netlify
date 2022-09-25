import React from 'react';
import Feed from './Feed';
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Home = () => {
  const { fetchErr,isLoading,searchResult } = useContext(DataContext);
  return (
    <main className='Home'>
      {isLoading && <p className='statusMsg'>Loading Posts ... </p>}
      {!isLoading && fetchErr && <p className='statusMsg' style={{color:"red"}}>{fetchErr}</p>}
      {!isLoading && !fetchErr && (searchResult.length ? <Feed posts={searchResult}/> : <p className='statusMsg'>no posts to display</p>)}
    </main>
  )
}

export default Home;
// {posts.length ? (
//   <Feed posts={posts}/>
// ) : (
//   <p style={{ marginTop: "2rem" }}>
//     No Posts to Display
//   </p>
// )}
  