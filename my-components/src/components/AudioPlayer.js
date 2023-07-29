import React, { useRef, useState } from 'react'

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(new Audio("/media/Pattukkottai ammalu DJ remix.mp3"));

    const togglePlayPause = ()=>{
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);

        if(!prevValue){
            audioRef.current.play();
        }else{
            audioRef.current.pause();
        }
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-full">
                <button 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                     onClick={togglePlayPause}
                >
                    {isPlaying ? 'Pause': 'Play'}
                </button>
            </div>
        </div>
    )
}

export default AudioPlayer
