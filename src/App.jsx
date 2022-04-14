import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  Azkar, Home, Prayer, Zekr, Quran, NotFound,
} from './Pages';

import './App.css';
import ContextProvider from './Context/Context';

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/azkar">
          <Route index element={<Azkar />} />
          <Route path=":category" element={<Zekr />} />
        </Route>

        <Route path="/prayer" element={<Prayer />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/quran" element={<Quran />} />

      </Routes>
    </ContextProvider>
  );
}

export default App;
