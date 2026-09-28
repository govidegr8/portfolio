import React, {useRef} from "react";
import './AvatarVideo.css';
import VIDEO from '../../assets/kling_avatar_video.mp4'

const AvatarVideo = () => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if(videoRef.current){
            videoRef.current.play().catch((error) => {
                console.log("Playback prevented:", error);
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
                onMouseEnter={handleMouseEnter}
            >
                <source src={VIDEO} type="video/mp4"/>
            </video>
        </div>
    );
};

export default AvatarVideo;