import React, { useContext } from 'react';
import './stylesLoader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import Container from '../Container/ContainerComponent';
import BluePrint from '../../assets/img/printBlue.png';
import GreenPrint from '../../assets/img/printGreen.png';
import LoaderContext from "./LoaderContext";
import Cursor from "../Cursor/CursorComponent";

class Loader extends React.Component {

  static contextType = LoaderContext;

  constructor(props) {
    super(props);
    this.state = { isToggleOn: false, text: "PRESS TO UNLOCK", classLoaderAnimation: false, img: BluePrint, visible: true, isLoaded:false};

    // Cette liaison est nécéssaire afin de permettre
    // l'utilisation de `this` dans la fonction de rappel.
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick() {
    this.setState({ isToggleOn: true, text: "SCANNING...", img: BluePrint});
    setTimeout(() => {
      this.setState({ isToggleOn: true, text: "ACCESS GRANTED", img: GreenPrint, classLoaderAnimation: true, visible: false });
  }, 3500);
  setTimeout(() => {
    this.context.setLoad(1);
// Animation terminée, on remonte l'état via le context pour supprimer le Loader du DOM
}, 7600);

  }

  render() {
    const isToggleOn = this.state.isToggleOn;
    const classLoaderAnimation = this.state.classLoaderAnimation;
    const img = this.state.img;
    const visible = this.state.visible;
    let stepContent;
    let classLoaderTop;
    let classLoaderBottom;
    let animationBottom;
    let animationBottomMore;
    let visibility;
    let visibilityAnimation;

    if(classLoaderAnimation) {
      classLoaderTop = "loader loader-animation-top";
      classLoaderBottom = "loader loader-animation-bottom";
      animationBottom = "loader-animation-bottom";
      animationBottomMore = "loader-animation-bottom-more";
    } else {
      classLoaderTop = "loader";
      classLoaderBottom = "loader";
      animationBottom = "";
      animationBottomMore = "";
    }

    if(!visible) {
      visibilityAnimation = "hidden-animation";
      visibility = "hidden";
    } else {
      visibilityAnimation = "";
      visibility = "";
    }

    if (isToggleOn) {
      stepContent = <div className="loader-circle-active">
        <div className={"greyPrint-cont " + visibility}>
          <img src={img} width="100px" className={visibility} />
        </div>
        <div id="mask" className={visibility}></div>
        <div className={"bluePrint-cont " + animationBottom}>
          <img src={img} height="140px" />
        </div>
        <div id="laser"></div>
      </div>

    } else {
      stepContent = <div className="loader-circle-inactive" onClick={this.handleClick}>
        {/*<p className="symbol" onClick={this.handleClick}>PRESS TO UNLOCK DOOR</p>*/}
        <FontAwesomeIcon icon={faPowerOff} size="4x" />
      </div>

    }

    return (
      <div className="loader-container">
        <div id="loader-top" className={classLoaderTop}>
        </div>
        <div id="loader-bottom" className={classLoaderBottom}>
          <div id="screen-cont" className={visibilityAnimation}>
            <div id="screen">
              <div className="top-left cubic"></div>
              <div className="top-right cubic"></div>
              <div className="bottom-right cubic"></div>
              <div className="bottom-left cubic"></div>
              <div id="text-cont">
                <p className="screen-text">{this.state.text}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={"element " + animationBottomMore}>
          {stepContent}
        </div>  
        <Cursor></Cursor>     
      </div>)
  }
}

export default Loader;