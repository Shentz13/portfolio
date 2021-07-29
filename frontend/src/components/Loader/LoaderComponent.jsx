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
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    
  }

    render () {
        return (
        <div className="loader-container">
            <div className="element">
                <p className="symbol" onClick={this.handleClick}>PRESS TO UNLOCK DOOR</p>
                <img src={BluePrint} width="100px"/>
            </div>
            <div id="loader-top" className="loader">
                
            </div>
        
            <div id="loader-bottom" className="loader">
                
            </div>
        </div>)
    }
}

export default Loader;