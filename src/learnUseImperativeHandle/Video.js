import { forwardRef, useRef, useImperativeHandle } from 'react';
import video1 from '../video/LM.mp4';

function Video(props, ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        playVideo: () => videoRef.current.play(),
        pauseVideo: () => videoRef.current.pause(),
    }));

    return (
        <video ref={videoRef}>
            <source src={video1} type="video/mp4" />
        </video>
    );
}

export default forwardRef(Video);
