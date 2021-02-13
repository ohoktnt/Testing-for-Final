import React from "react";

export default function StoreListItem(props) {
  return (
    <li>
      Name: {props.name}, 
      Quantity: {props.quantity}, 
      Price: ${props.price / 100}
    </li>
  )
}