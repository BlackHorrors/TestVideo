import React, {useState, useRef, useEffect} from "react";
import videojs, {VideoJsPlayer} from "video.js"




import 'video.js/dist/video-js.css';

interface CustomPlayerInterface {
    options: videojs.PlayerOptions,
    autoPlay: boolean
}


export const CustomPlayer = (props: CustomPlayerInterface) => {
    let [getPlayer, setPlayer] = useState<VideoJsPlayer | null>(null);
    let videoRef = useRef<HTMLVideoElement | null>(null);


    videojs.registerPlugin('myPlugin', function (options: any) {
        let player = this;
        player.on('play', () => {
            console.log('play')
        })
        player.on("pause", () => {
            console.log('pause')
        })
    });



    videojs.use("video/mp4", (player: VideoJsPlayer) => {
        return {
            setSource: function (srcObj: any, next) {
                // pass null as the first argument to indicate that the source is not rejected
                console.log("middlaware", srcObj);
                next(null, srcObj);
            },
        };
    });

    useEffect(() => {
        console.log(props.options)
        setPlayer(videojs(videoRef.current, {...props.options, plugins: {"myPlugin": {}}}, () => {
        }));


    }, []);

    useEffect(() => {
        if (getPlayer) {

        }
    }, [getPlayer]);

    const handleTimeLine = (event: any) => {
        console.log(event)
    };
    return (
        <div>
            <video ref={videoRef} className={"video-js"} onTimeUpdate={handleTimeLine}>

            </video>
            {getPlayer !== null && <h1>{getPlayer.duration()}</h1>}
            <button onClick={() => {
                getPlayer!.width(800)
            }}>Resize
            </button>
            <input type={"range"} onChange={(data) => getPlayer!.volume(Number(data.target.value))}/>
            <button onClick={() => getPlayer!.src(  `http://media.w3.org/2010/05/video/movie_300.mp4 ` )}>Change track
            </button>
            <button onClick={() => {getPlayer!.play()}}>Play</button>
            <button onClick={() => getPlayer!.pause()}>Pause</button>
            {/*<button onClick={()=>{ getPlayer! }}> </button>*/}
            <form > </form>


        </div>
    )
};
