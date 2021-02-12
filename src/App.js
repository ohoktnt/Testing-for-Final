import React from 'react'
import './App.css';

import Canvas from './components/canvas';
import Player from './components/player';

function App() {
  const appStyle = {
    width: "400px",
    height: "400px",
    border: "1px solid black"
  }

  return (
    <React.Fragment>

    <div className="zone-container">
        <Canvas />
        <Player skin={1} />
    </div>

    </React.Fragment>
  );
}

export default App;
