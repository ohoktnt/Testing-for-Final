import React from 'react';
import Actor from '../actor';


import useKeyPress from '../../hooks/use-key-press';
import useWalk from '../../hooks/use-walk';


export default function Player({ skin }) {
  const { dir, step, walk, pos } = useWalk(3);
  const data = {
    h: 32,
    w: 32
  }

  // to get the key press from the user and turn into direction
  useKeyPress((e) => {
    // gets the key pressed, replace the arrow iwth empty string
    // will print the direction facing 
    const dir = e.key.replace("Arrow", "").toLowerCase()
    // refractor by placing dir statement inside the walk fn
    if (dir === 'down' || dir === 'right' || dir === 'left' || dir === 'up') {
      walk(dir)
    } else if (dir === ' '){
      console.log('spacebar was pressed!')
    }
    
    // to prevent the screen from scrolling
    e.preventDefault()
  })

  return ( 
    <Actor 
      sprite={`char${skin}.png`} 
      data={data} 
      step={step} 
      dir={dir}
      pos={pos}
    />
  );
}