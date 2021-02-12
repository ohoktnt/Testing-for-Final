import React, { useEffect, useRef }from 'react';
import { map } from '../../helpers/map.js'

export default function Canvas(props) {
  
  const canvasRef = useRef(null)

  const tileAtlas = new Image();
  tileAtlas.src = 'TestingAtlas1.png';
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    // first draw
    // context.fillStyle = '#000000'
    // context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    
    // testing map

    // context: A 2D canvas context
    // tileAtlas: image obj containing the tile atlas
    //  map: the tile map obj

    console.log(tileAtlas)
    
    tileAtlas.onload = () => {
      for (let c = 0; c < map.cols; c++) {
        for (let r =0; r <map.rows; r++) {
          const tile = map.getTile(c, r);
          if (tile !== 0) {
            console.log('inside the drawing loop')
            context.drawImage(
              tileAtlas, // image
              (tile - 1) * map.tsize, // source x
              0, // source y
              map.tsize, // source width
              map.tsize, // source height
              c * map.tsize, //target x
              r * map.tsize, // target y
              map.tsize, // target width
              map.tsize // target height
            )
          }
        }
      }

    }
    

  }, [])
  
  return <canvas ref={canvasRef} {...props} width={300} height={300} />
}