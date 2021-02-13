import React, { useState } from 'react';
import StoreList from '../store/storeList'

export default function Store(props) {
  const [open, setOpen] = useState (true)

  const store = {
    id: 3,
    name: "Store",
    products: [
      {id: 1,
      name: "Sword",
      quantity: 2,
      price: 1000},
      {id: 2,
      name: "Shield",
      quantity: 1,
      price: 800}
    ]
  }

  const storeStyle = {
    position: 'absolute',
    top: '32px',
    left: '32px',
    color: 'red',
    border: '1px solid black'
  }

  function back() {
    setOpen(false)
  }


  return (
    <div>
      <h1 style={storeStyle}>I AM STORE</h1>
      {open && <StoreList store={store} onClose={back} /> }
    </div>
  )
  

}