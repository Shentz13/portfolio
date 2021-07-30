import React from 'react';
import './stylesLoader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import Container from '../Container/ContainerComponent';
import BluePrint from '../../assets/img/printBlue.png';

class Loader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
    
        // Cette liaison est nécéssaire afin de permettre
        // l'utilisation de `this` dans la fonction de rappel.
        this.handleClick = this.handleClick.bind(this);
      }

 handleClick() {
  
  this.setState({isToggleOn: true});
 
    console.log(this.state.isToggleOn);

    
  }

    render () {
      const isToggleOn = this.state.isToggleOn;
      let step;

      if(isToggleOn) {
        step = <div className="loader-circle-active">
          <div className="greyPrint-cont">
            <img src={BluePrint} width="100px"/>
            </div>
          <div className="bluePrint-cont">
            <img src={BluePrint} width="100px"/>
            </div>
          
          <div id="laser"></div>
      </div>
      } else {
        step = <div className="loader-circle-inactive">
          {/*<p className="symbol" onClick={this.handleClick}>PRESS TO UNLOCK DOOR</p>*/}
          <FontAwesomeIcon icon={faPowerOff} onClick={this.handleClick} size="4x"/>
          
          </div>
      }
        return (
        <div className="loader-container">
                      <div id="loader-top" className="loader">                
            </div>
        
            <div id="loader-bottom" className="loader">                
            </div>
            <div className="element">
                {step}
            </div>

        </div>)
    }
}

export default Loader;