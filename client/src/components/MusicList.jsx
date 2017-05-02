import React from 'react';

const MusicList = (props) =>{
  console.log(props)
  const songs = props.music.map((song, index) => {
    return<li value={index + 1} key={index}><img src= {song["im:image"][0].label}/>{song.title.label}</li>
  })


  return(
    <div className="songs">
      <h4 className= "title">
        <ol>{songs}</ol>
      </h4>
    </div>

    )

  
  

}

export default MusicList;