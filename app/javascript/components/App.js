import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

function App(){
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </>
}

export default App;