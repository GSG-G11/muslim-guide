import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  Azkar, Home, Prayer, Zekr,
} from './Pages';

import './App.css';
import NotFound from './Pages/404/404';

function App() {
  const [azkar, setAzkar] = useState([]);

  const getAzkar = (azkarList) => {
    setAzkar(azkarList);
  };

  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="/azkar">
        <Route index element={<Azkar getAzkar={getAzkar} />} />
        <Route path=":category" element={<Zekr azkar={azkar} />} />
      </Route>

      <Route path="/prayer" element={<Prayer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
