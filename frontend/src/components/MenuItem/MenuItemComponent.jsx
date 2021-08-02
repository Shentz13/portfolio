import React from 'react';
import './stylesMenuItem.css';

function MenuItemComponent(props) {

        return(
        <div className="menu-item">
            <h2>{props.contentText}</h2>
        </div>
        )
    
}

export default MenuItemComponent;