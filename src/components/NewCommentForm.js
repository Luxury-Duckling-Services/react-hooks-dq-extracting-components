import React from "react"

function NewCommentForm ( {videoSelected, ifShow , allComments , setAllComments , newComment, setNewComment} ) {
    
    function handleSubmit(e) {
        e.preventDefault()
        setAllComments(
            [ ...allComments , newComment ]
        )
        setNewComment(
            {
                id: allComments.length + 2,
                videoId: videoSelected.id,
                content: ''
            }
        )
        e.target.reset()
        console.log(allComments)
    }

    function handleChange(e) {
        setNewComment({
            ...newComment,
            content: e.target.value,
            videoId: videoSelected.id
        })
    }
    
    if (ifShow) {
        return (
            <form className="message-form" onSubmit={handleSubmit}>
                <input placeholder="Type what I leant from this video..." onChange={handleChange} />
                <button>Add Notes</button>
            </form> )

    } else {
        return <></>  
    }
}

export default NewCommentForm