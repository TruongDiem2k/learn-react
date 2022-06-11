import { useRef, useEffect } from 'react';
import Video from './Video';

function ImperativeHandle() {
    const videoRef1 = useRef();

    const play = () => videoRef1.current.playVideo();
    const pause = () => videoRef1.current.pauseVideo();

    useEffect(() => {
        console.log(videoRef1);
    });
    return (
        <>
            <Video ref={videoRef1} />
            <button onClick={play}>Play</button>
            <button onClick={pause}>Pause</button>
        </>
    );
}

export default ImperativeHandle;
