import React, { useState, useEffect } from 'react';

const Media = ()=>{
    const song = "/media/Pattukkottai ammalu DJ remix.mp3";
    const audio = new Audio(song);
    const playAudio = ()=>{
        audio.play();
    }
    
    return(
        <div>
            <div>
                <img src="/media/boy.png" alt="boy" height="100px" width="auto" />
            </div>
            <div>
                <audio playsInline src="/media/Pattukkottai ammalu DJ remix.mp3" controls></audio>
                {/* <button onClick={playAudio}>Play Audio</button> */}
            </div>
            <div>
                <video width="320" height="240" controls>
                    <source src="/media/krishnaFluteVideo.mp4" type="video/mp4" />
                </video>
            </div>
            {/* <AudioPlayer /> */}
        </div>
    )
}

export default Media;