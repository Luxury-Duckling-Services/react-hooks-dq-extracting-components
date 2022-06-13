import React from "react";
import Comments from "./Comments"
import NewCommentForm from "./NewCommentForm"
import Video from './Video'

function Main( { ifVideoSelected , videoSelected , allComments , setAllComments , newComment , setNewComment } ) {
    
    return (
    <main>
        <h2>{ifVideoSelected ?  `Study Notes for ${videoSelected.title}` : `Welcome to Yifan's Study Notes for JFootball TV. Click on Videos On the Left.` }</h2>
        <Video ifShow={ifVideoSelected} videoSelected={videoSelected}/>
        <Comments ifShow={ifVideoSelected} videoSelected={videoSelected} allComments={allComments}/>
        <NewCommentForm ifShow={ifVideoSelected} videoSelected={videoSelected} allComments={allComments} setAllComments={setAllComments} newComment={newComment} setNewComment={setNewComment} />
      </main>
    )
}

export default Main
