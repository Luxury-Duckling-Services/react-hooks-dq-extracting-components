import React from "react";

function VideoTitle ( {video , allVideos , deleteVideo , setIfVideoSelected , setVideoSelected} ) {
    function selectVideo(e) {
        if (e.target.innerText !== 'Delete') {
            setIfVideoSelected(true)
            let title
            if (e.target.classList.contains('contact')) {
                title = Array.from(e.target.children)[1].innerText.trim()
            } else {
                title = Array.from(e.target.parentNode.children)[1].innerText.trim()
            }
            setVideoSelected( allVideos.filter( (video) =>{
                if (video.title.trim() === title) {
                    return true
                } else {
                    return false
                }
            })[0])
        }
    }
    
    return (
        <li className="contact" onClick={selectVideo}>
            <div className="icon">{video.position.charAt(0)}</div>
            <span>{video.title}</span>
            <button onClick={deleteVideo}>Delete</button>
        </li>
    )
}


export default VideoTitle