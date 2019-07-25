import React, { useRef } from 'react';
import logo from './logo.svg';
import clamp from 'lodash-es/clamp';
import { useSprings, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import './App.css';

const pages = [
  './jpg/TMLBAY-cover.jpg',
  './jpg/deep-breaths.jpg',
  './jpg/interview.jpg',
  './jpg/tell-me-a-little-bit-about-yourself.jpg',
  './jpg/see-me-or-CV2.jpg',
  './jpg/analogue-soul.jpg',
  './jpg/weaknesses.jpg',
  './jpg/lunch-break-interlude.jpg',
  './jpg/music-to-my-career.jpg',
  './jpg/5-year-plan.jpg',
  './jpg/salary-negotiation.jpg',
  './jpg/back-cover2.jpg',
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
