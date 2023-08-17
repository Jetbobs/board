import logo from './logo.svg';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import BoardList from './routes/BoardList';
import React from 'react';
import Home from './routes/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path='/board' element={<BoardList></BoardList>}></Route>
    </Routes>
  );
}

export default App;
