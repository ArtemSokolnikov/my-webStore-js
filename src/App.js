import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import StoreIntro from './components/StoreIntro';
import CardCollection from './components/CardCollection';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<StoreIntro />}>
            <Route index element={<CardCollection />} />
            <Route path='product/:id' element={<CardCollection />}>
              <Route index element={<ProductDetails />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
