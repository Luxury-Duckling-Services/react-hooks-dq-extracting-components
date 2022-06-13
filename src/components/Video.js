import React from "react"

function Video( {ifShow , videoSelected} ) {
    if (ifShow) {
    return (
    <iframe
        width="1000"
        height="500"
        src={videoSelected.url}
        frameBorder="0"
        allowFullScreen
        title={videoSelected.title}
    />)} else {
        return <></>
    }
}

export default Video