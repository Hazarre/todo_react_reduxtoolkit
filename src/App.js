import React from 'react';
import logo from './logo.svg';
import Actions from './features/todos/Actions';
import Todos from './features/todos/Todos';
import { StatusFilter } from './features/filters/StatusFilter';
import { ColorFilter } from './features/filters/ColorFilter';

import './App.css';

function App() {
  return (
    <div >
        <Todos />
      <footer>
        <Actions/>
        <StatusFilter/>
        <ColorFilter/>
      </footer>
    </div>
  );
}

export default App;
