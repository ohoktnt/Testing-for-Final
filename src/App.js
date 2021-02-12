import React from 'react'
import './App.css';

import Canvas from './components/canvas';
import Player from './components/player';

function App() {

  return (
    <React.Fragment>

    <div className="zone-container">
        <Canvas />
        <Player skin={3} />
    </div>

    </React.Fragment>
  );
}

export default App;
