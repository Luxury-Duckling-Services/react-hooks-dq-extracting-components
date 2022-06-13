import React , { useState } from "react";
import { initialComments, initialVideos } from "../data";
import VideosList from './VideosList'
import Main from './Main'

function App() {
  const [ allVideos , setAllVideos ] = useState(initialVideos)
  const [ allComments , setAllComments ] = useState(initialComments)
  const [ ifVideoSelected , setIfVideoSelected ] = useState(false)
  const [ videoSelected , setVideoSelected ] = useState( { } )

  // new video

  const [ newVideo , setNewVideo ] = useState({
    id: allVideos.length + 1,
    title: "",
    position: 'F',
    url: ""
  })

  // new comment

  const [ newComment , setNewComment ] = useState({
    id: allComments.length + 1,
    videoId: '',
    content: ''
  })

  //

  return (
    <div className="app">
      <VideosList allVideos={allVideos} setAllVideos={setAllVideos} newVideo={newVideo} setNewVideo={setNewVideo} setIfVideoSelected={setIfVideoSelected} setVideoSelected={setVideoSelected}/>
      <Main ifVideoSelected={ifVideoSelected} videoSelected={videoSelected} allComments={allComments} setAllComments={setAllComments} newComment={newComment} setNewComment={setNewComment}/>
    </div>
  );
}

export default App;
