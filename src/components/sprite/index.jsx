import React from "react";

export default function Sprite({ image, data, pos }) {
  const { y, x, h, w } = data;
  return <div
    style={{
      // moving the char
      position: "absolute",
      top: pos.y,
      left: pos.x,
      // size of the char
      height: `${h}px`,
      width: `${w}px`,
      // source of char - able to change
      backgroundImage: `url(${image})`,
      // position of char based on step and dir
      backgroundRepeat: "no-repeat",
      backgroundPosition: `-${x}px -${y}px`
    }}
  >   
  </div>
}