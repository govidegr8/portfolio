import React, {useRef} from "react";
import './AvatarVideo.css';
import VIDEO from '../../assets/kling_avatar_video.mp4'
import POSTER from '../../assets/avatar.png'

const AvatarVideo = () => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if(videoRef.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
            videoRef.current.play().catch((error) => {
                if (error.name !== 'AbortError') console.warn('Avatar video playback was prevented.')
            });
        }
    };

    return (
        <div className="video-container">
            <video
                ref={videoRef}
                className="hover-video"
                muted
                playsInline
                preload="metadata"
                poster={POSTER}
                onMouseEnter={handleMouseEnter}
            >
                <source src={VIDEO} type="video/mp4"/>
            </video>
        </div>
    );
};

export default AvatarVideo;