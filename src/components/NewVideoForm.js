import React from "react";

function NewVideoForm ( { inputTitle , inputUrl , inputPosition , inputVideo } ) {
    return (
    <form onSubmit={inputVideo}>
    <label>
        Title: <input type="text" name="text" onChange={inputTitle}/> <br></br>
        Url: <input type="text" name="text" onChange={inputUrl}/> <br></br>
    </label>
    
    <label>
      Position: <select name="category" onChange={inputPosition}>
        <option value="Forward">Forward</option>
        <option value="Midfielder">Midfielder</option>
        <option value="Defender">Defender</option>
        <option value="Goalkeeper">Goalkeeper</option>
      </select>
    </label>

    <input type="submit" value="Add video" />
  </form>
)
}

export default NewVideoForm