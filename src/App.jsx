import { useState } from "react";
import PostList from "./components/PostList"
import MainHeader from "./components/MainHeader";

function App() {
  const [ modalIsVisible, setmodalIsVisible ]= useState(true);

  function showmodalHandler() {
    setmodalIsVisible(true);
  }

  function hidemodalHandler() {
    setmodalIsVisible(false);
  }


  return (
    <>
      <MainHeader onCreatePost={showmodalHandler}/>
      <main>
        <PostList 
          isPosting={modalIsVisible} 
          onStopPosting={hidemodalHandler}/>
      </main>
    </>
  )
}

export default App
