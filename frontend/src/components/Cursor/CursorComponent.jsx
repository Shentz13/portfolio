import React, { Component } from 'react';
import './stylesCursor.css';

class Cursor extends Component {
  state = {
    left: 0,
    top: 0
  }

  componentDidMount() {
    // When the component is mounted, add your DOM listener.
    document.addEventListener("mousemove", this.handleCursor);
  }

  componentWillUnmount() {
    // Make sure to remove the DOM listener when the component is unmounted.
    document.removeEventListener("mousemove", this.handleCursor);
  }

  handleCursor = (e) => {
    const cursor = document.getElementsByClassName('cursor')[0];     
    cursor.setAttribute('style','top:'+e.pageY+'px; left:'+ (e.pageX - 50)+'px;');
  }

  render() {
    return (
      <div className='cursor'></div>
    )
  }
}

export default Cursor;