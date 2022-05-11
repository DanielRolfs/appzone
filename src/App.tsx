import React from 'react';
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Catalog from './pages/Catalog'
import About from './pages/About'
import Admin from './pages/Admin'
import DeveloperDocs from './pages/DeveloperDocs'


function App() {
  return (
    <div className="App w-screen h-screen">
    

  <BrowserRouter basename="">
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/docs/devdocs-registering" element={<DeveloperDocs />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
