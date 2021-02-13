import React, {useState} from 'react'
import './App.css';

import Canvas from './components/canvas';
import Player from './components/player';
import Store from './components/store';

function App() {
  const [open, setOpen] = useState (false)

  function back() {
    setOpen(false)
  }

  function openStore() {
    setOpen(true)
  }

  return (
    <React.Fragment>

    <div className="zone-container">
        <Canvas />
        <Player skin={1} openStore={openStore} closeStore={back} store={open}/>
        <Store open={open} back={back}/>
    </div>

    </React.Fragment>
  );

}

export default App;
