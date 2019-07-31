import React, { useRef } from 'react';
import clamp from 'lodash-es/clamp';
import { useSprings, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import './App.css';

const pages = [
  'https://i.ibb.co/vhmm9VD/TMLBAY-Cover.jpg',
  'https://i.ibb.co/hYJBzN8/Deep-Breaths.jpg',
  'https://i.ibb.co/CQw1k9r/See-me-or-CV2.jpg',
  'https://i.ibb.co/44q2RzV/see-me-or-CV2.jpg',
  'https://i.ibb.co/TPthMwB/analogue-soul.jpg',
  'https://i.ibb.co/8jrn7pp/weaknesses.jpg',
  'https://i.ibb.co/jM2rkVN/lunch-break-interlude.jpg',
  'https://i.ibb.co/tmbkLsV/music-to-my-career.jpg',
  'https://i.ibb.co/hZD6hJn/5-year-plan.jpg',
  'https://i.ibb.co/FXkH11B/salary-negotiation.jpg',
  'https://i.ibb.co/r2XtJdC/back-cover2.jpg',
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
      <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: `url(${pages[i]})` }} />
    </animated.div>
  ))
}

export default App;
