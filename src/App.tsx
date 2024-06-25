import React from 'react';
import Login from './componentes/login/login';
import { Routes, Route } from 'react-router-dom';
import Home from './paginas/home';

export function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App