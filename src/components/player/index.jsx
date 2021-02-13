import React from 'react';
import Actor from '../actor';


import useKeyPress from '../../hooks/use-key-press';
import useWalk from '../../hooks/use-walk';
import { map } from '../../helpers/map';


export default function Player(props) {
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
    } else if (dir === ' ' && map.getTile(pos.x/32, pos.y/32) === 3){
      console.log('inside the store area!')
      // can have a function to open the store 

      // if i set each store id based on tile number
      // i can pass that as the id of the store and use db call
      props.openStore();
      console.log('tried to open store')
    } 
    
    // to prevent the screen from scrolling
    e.preventDefault()
  })

  return ( 
    <Actor 
      sprite={`char${props.skin}.png`} 
      data={data} 
      step={step} 
      dir={dir}
      pos={pos}
    />
  );
}