import React from "react";
import VideoTitle from './VideoTitle'
import NewVideoForm from './NewVideoForm'

function VideosList ( {allVideos , setAllVideos , newVideo , setNewVideo , setIfVideoSelected , setVideoSelected } ) {
    
    function inputTitle(e) {
        setNewVideo( {
            ...newVideo , 
            title: e.target.value
        })
    }

    function inputUrl(e) {
        setNewVideo( {
            ...newVideo , 
            url: e.target.value
        })
    }

    function inputPosition(e) {
        setNewVideo( {
            ...newVideo , 
            position: e.target.value
        })
    }    
    
    function inputVideo(e) {        
        e.preventDefault()
        e.target.reset()
        setAllVideos([ ...allVideos , newVideo ])
        setNewVideo( {
            id: allVideos.length + 2,
            title: "",
            position: 'F',
            url: ""
        })
    }

    function deleteVideo(e){
        const titleToBeDeleted = Array.from(e.target.parentNode.children)[1].innerText.trim()
        
        setAllVideos(allVideos.filter( (video) => {
            if (video.title === titleToBeDeleted) {
                return false
            } else {
                return true
            }
        }))
    }

    return (
    <nav>
        <h2>List of Videos to Study</h2>
        <ul className="contacts">
          {allVideos.map( (video) => {
            return <VideoTitle key={video.title} allVideos={allVideos} video={video} deleteVideo={deleteVideo} setIfVideoSelected={setIfVideoSelected} setVideoSelected={setVideoSelected}/>
          })}
        </ul>
        
        <NewVideoForm inputTitle={inputTitle} inputUrl={inputUrl} inputPosition={inputPosition} inputVideo={inputVideo}/>
      
    </nav>
    )
}

export default VideosList