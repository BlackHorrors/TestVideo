import React, {useState, useRef, useEffect} from 'react';
import './App.scss';
import videojs from "video.js"
// import {Main} from "./Main";
import {CustomPlayer} from "./Player/Player";


const App: React.FC = () => {
    const defaultState: videojs.PlayerOptions = {
        controls: false,
        autoplay: true,
        sources: [{
            src: 'http://vjs.zencdn.net/v/oceans.mp4',
            type: 'video/mp4'

        }],
        controlBar: {
            fullscreenToggle: false,
        },
        height: 400,
        width: 300,

    };

    const [options, setOptions] = useState<videojs.PlayerOptions>(defaultState);
    const resize = () => {
        setOptions({
            ...options,
            height: 800
        })
    };

    return (
        <div className="App">
            <header className="App-header">
                <CustomPlayer options={options} autoPlay={!!options.autoplay}/>

              {/*<Main/>*/}

                <button onClick={() => resize()}>stop auto play</button>
            </header>

        </div>
    );
};

export default App;
