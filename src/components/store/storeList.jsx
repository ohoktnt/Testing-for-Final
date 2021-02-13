import React from 'react';

import StoreListItem from './storeListItem'

export default function StoreList(props) {
  const products = props.store.products
  console.log(products)

  const storeStyle = {
    position: 'absolute',
    top: '32px',
    left: '32px',
    color: 'black',
    width: "200px",
    height: "100px",
    backgroundColor: "white",
    fontSize: '.5em',
    border: '1px solid black'
  }

  const parsedProducts = products.map( item => {
    return <StoreListItem 
      key={item.id}
      name={item.name}
      quantity={item.quantity}
      price={item.price}
    />
  })

  return (
    <div style={storeStyle}>
      <button onClick={() => props.onClose()}>CLOSE</button>
      <ul>
        {parsedProducts}
      </ul>
    </div>
  )

}