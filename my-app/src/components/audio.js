import React, { Component } from 'react';
// import Audio from './components/audio'

class Audio extends Component {

  constructor() {
    super();
    this.state = {};
    
  }

  render() {
    console.log("state: " + this.props.note);
    // preload='true'
    return (
        <div className={this.props.note}>
          <audio controls id='aud' autoPlay>
            <source src={this.props.note} type="audio/ogg" />
              Your browser does not support the audio element.
          </audio>
       </div>
    );
  }
  
}

export default Audio;