import React, {useRef, Component} from "react";

class ComponentClose extends React.Component<{}, {}> {
    constructor(props: ComponentClose) {
        super(props);
    }

}

// export const App = () => {
//     const [getPlayer, setPlayer] = useState();
//     const videoReference = useRef<HTMLVideoElement | null>(null);
//     useEffect(() => {
//         setPlayer(videoReference)
//     }, []);
//
//
//     const handleClick = () => {
//         console.log('pause');
//         getPlayer.current.pause().then((data: any) => {
//             console.log('playEr', data)
//         }).catch((error: any) => console.log(error))
//     };
//     console.log('pause', process.env);
//     return (
//         <>
//
//             <video ref={videoReference} autoPlay={false} width="600" height="400"
//                    onLoadedData={(event1 => console.log(event1))}>
//
//                 Sorry, your browser doesn't support embedded videos.
//                 <source src={"./id1.mp4"} type={'video/mp4'}/>
//             </video>
//             <button onClick={handleClick}>Pause</button>
//
//
//         </>
//     )
// };

