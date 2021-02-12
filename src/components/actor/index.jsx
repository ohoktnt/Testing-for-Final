import React from 'react';
import Sprite from '../sprite';

export default function Actor({
                              sprite, 
                              data, 
                              pos = {x:0, y:0}, 
                              step = 0, 
                              dir = 0
                            }) {
  const { h, w } = data;
  return (
    <Sprite 
      image={sprite}
      pos={pos} 
      data={{
        x: step * w,
        y: dir * h,
        w,
        h,
      }}
    />
  )
}