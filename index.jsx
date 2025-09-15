import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Vans from './src/pages/Vans';
import VanDetail from './src/pages/VanDetail';

import './server';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className='site-logo' to='/'>
          #VANLIFE
        </Link>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
