import React from "react"

function Comments ( {ifShow , videoSelected , allComments } ) {
    if (ifShow) {
        return (
            <section className="messages">
            <ul>
                {
                allComments.filter( (comment)=> {
                    return comment.videoId === videoSelected.id
                }).map((comment)=>{
                    return (
                        <li className="message received">
                        <div className="icon">YW</div>
                        <span className="content">{comment.content}</span>
                        </li>
                    )
                })
                }
            </ul>
          </section>)
    } else {
        return <></>        
    }
}

export default Comments