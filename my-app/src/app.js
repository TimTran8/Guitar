import React, { Component } from 'react';
import './index.css';
// import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button';
import Audio from './components/audio'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.css';
// import Row from 'react-bootstrap/Row'
// import image from './public/tuner.svg'
// import {ReactComponent as Logo} from './tuner.svg'

// import sound from './notes'
// import CounterC from './components/counterc.js'

class Guitar extends Component {
    constructor() {
        super();
        let notes = ['./notes/E.m4a', './notes/A.m4a', './notes/D.m4a', './notes/G.m4a', './notes/B.m4a', './notes/e_.m4a', './notes/medicine.mp3'];
        var item = notes[Math.floor(Math.random()*notes.length)];
        this.notePlayed = item;
        this.check = false;
        this.index = 0;
        // this.clicked;
        // this.chordPlayed = './notes/E.m4a';
    };
    
    audioSel(i) {
        // i.preventDefault();
        console.log("in audioSel");
        this.check = true;
        this.index = i;
        // let notes = ['./notes/E.m4a', './notes/A.m4a', './notes/D.m4a', './notes/G.m4a', './notes/B.m4a', './notes/e_.m4a', './notes/medicine.mp3'];
        // this.notePlayed = notes[i];
        // console.log("check: " + this.check);
        console.log("index: " + this.index);
        // this._play(this.notePlayed);
        document.getElementById('aud').load();
        console.log("refreshing");
        // this._play.bind(this)
    }
    
    randomChord() {
        // preventDefault();
        let items = ['./chords/E.m4a', './chords/A.m4a', './chords/D.m4a', './chords/G.m4a', './chords/B.m4a', './chords/e_.m4a'];
        // var item = items[Math.floor(Math.random()*items.length)];
        // console.log("Item:" + item);
        this.notePlayed = items[this.index];
        console.log("notePlayed: " + this.notePlayed);
      }
      
    render() {
        // return <h1>Hello, world!</h1>;
        if (this.check === false) {
            console.log("check: " + this.check);
            console.log("index: " + this.index);
            console.log("do nothing");
        }
        else {
            console.log("random: " + this.notePlayed);
            this.randomChord();
            // let keys = ['./notes/E.m4a', './notes/A.m4a', './notes/D.m4a', './notes/G.m4a', './notes/B.m4a', './notes/e_.m4a', './notes/medicine.mp3'];
            // console.log("check: " + this.check);
            // console.log("index: " + this.index);
            // this.notePlayed = keys[this.index];
            // console.log("note: " + keys[this.index]);
            // console.log("notePlayed: " + this.notePlayed);
        }
        console.log("random: " + this.notePlayed);
        this.randomChord();
        return (
            
            <div class="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h2 className="text-center">Guitar Tune</h2>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className="text-center">
                    {/* <audio controls preload='true' id='aud' autoPlay>
                        <source src={this.chordPlayed} type="audio/ogg" />
                        Your browser does not support the audio element.
                    </audio> */}
                    <Audio note={this.notePlayed} />
                </div>
                <span className="card card-body mb-3">
                    <div className="card-columns">
                        <div className="card">
                            <button type="button" className="btn btn-primary" value='.notes/D.m4a' onClick={() => this.audioSel(2)}>D</button>
                        </div>
                        <div class="card">
                            <button type="button" class="btn btn-primary" value='.notes/G.m4a' onClick={() => this.audioSel(3)}>G</button>
                        </div>
                    </div>
                    <div class="card-columns">
                        <div class="card">
                            <button type="button" class="btn btn-primary" value='.notes/A.m4a' onClick={() => this.audioSel(1)}>A</button>
                        </div>
                        <div class="card">
                            <button type="button" class="btn btn-primary" value='.notes/B.m4a' onClick={() => this.audioSel(4)}>B</button>
                        </div>
                    </div>
                    <div class="card-columns">
                        <div class="card">
                            {/* <div class="card-body text-center">
                            <p class="card-text">Some text inside the first card</p>
                        </div> */}
                            <button type="button" class="btn btn-primary" value='.notes/E.m4a' onClick={() => this.audioSel(5)}>E</button>
                            {/* this._play.bind(this) */}
                        </div>
                        <div class="card">
                            <button type="button" class="btn btn-primary" value='.notes/e_.m4a' onClick={() => this.audioSel(5)}>e</button>
                        </div>

                    </div>
                </span>
                {/* <div class="image">test</div> */}

            </div>
        );
    }
    _play(prop) {
        console.log("loading")
        document.getElementById('aud').load();
    }
    
}


export default Guitar;