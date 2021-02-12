// maintaining the state that hs to do with the animation

import { useState} from 'react';

import { map } from '../../helpers/map';

// maxSteps is the max number of steps in each walk animation
// in this case is 3
export default function useWalk(maxSteps) {
  // direction char is facing
  const [dir, setDir] = useState(0)
  // animation steps
  const [step, setStep] = useState(0)
  // track position
  const [pos, setPos] = useState({x:0, y:0});

  // setting direction map
  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3
  };

  // setting up for moving
  const stepSize = 16;

  const modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x:0, y: -stepSize }
  }

  // sets direction and update setup - animation
  function walk(dir) {
    // refractor to be able to change position
    // setDir(directions[dir])

    // if the direction is the same as last keypress, move the
    // char in that direction
    // the direction still has to be returned to be set
    setDir((prev) => {
      if (directions[dir] === prev) {
        move(dir)
      }
      return directions[dir]
    })

    // takes current step and check which step it is in 
    // if the step is not the maxSteps (end of animation)
    // move it forward in the step, if its at the maxStep,
    // go to the start of the steos animation
    setStep(prev =>  prev < maxSteps -1 ? prev + 1 : 0)

  }

  // using the chart, updates both y and x based on direction
  function move(dir) {
    // brute force using numbers to set map boundaries,
    // can refractor to use the map size as limits

    // BOUNDARIES
    if (pos.x === 0 && modifier[dir].x < 0) {
      // if on the left side, do not move pass
    } else if (pos.x >= 224 && modifier[dir].x > 0 ) {
      // if on the right side, do not move pass
    } else if (pos.y === 0 && modifier[dir].y < 0) {
      // do nothing
    } else if (pos.y >= 224 && modifier[dir].y > 0 ){
      // do nothing
    } else {
      setPos(prev => ({
        x: prev.x + modifier[dir].x,
        y: prev.y + modifier[dir].y
      }))
    }
  }

  // to be used by the character
  return {
    walk,
    dir,
    step,
    pos
  }

}
