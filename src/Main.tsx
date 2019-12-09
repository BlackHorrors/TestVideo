import React, {useRef, useEffect, useState} from "react";

export const Main = () => {
    const [getPlayer, setPlayer] = useState();
    const videoReference = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        setPlayer(videoReference)
    }, []);


    const handleClick = () => {
        console.log('resp');
        getPlayer.current.play().then((data: any) => {
            console.log('playEr', data)
        }).catch((error: any) => console.log(error))
    };
    console.log('play', process.env);
    return (
        <>

            <video ref={videoReference} autoPlay={false} width="600" height="400"
                   onLoadedData={(event1 => console.log(event1))}>

                Sorry, your browser doesn't support embedded videos.
                <source src={"./id1.mp4"} type={'video/mp4'}/>
            </video>
            <button onClick={handleClick}>Play</button>
            <button id="stopVideo"> Stop</button>


        </>
    )
};
