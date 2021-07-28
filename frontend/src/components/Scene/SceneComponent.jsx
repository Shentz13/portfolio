import './stylesScene.css';
import Container from '../Container/ContainerComponent';
import Text from '../Text/TextComponent';
import Menu from '../Menu/MenuComponent';
import { useRef } from 'react';
import video from '../../assets/video/Astronomy-3.mp4';

function Scene() {
    const videoRef = useRef();
    const setPlayBack = () => {
        videoRef.current.playbackRate = 0.5;
    };
    return (
        <div className="sceneContainer">
            <video autoPlay loop muted ref={videoRef} onCanPlay={() => setPlayBack()}>
                <source src={video} type='video/mp4' />
            </video>
            <div id="frame">

                <Menu></Menu>
            </div>
        </div>
    )
}


export default Scene;