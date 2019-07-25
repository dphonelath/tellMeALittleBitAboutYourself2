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
  const index = useRef(0)
  const [props, set] = useSprings(pages.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > window.innerWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0)
      const sc = down ? 1 - distance / window.innerWidth / 2 : 1
      return { x, sc, display: 'block' }
    })
  })
  return props.map(({ x, display, sc }, i) => (
    <animated.div {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
      <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: `${pages[i]}` }} />
    </animated.div>
  ))
}

export default App;
