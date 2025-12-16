import React from 'react';
import ProtectSheet from './samples/Protectsheet';
import ProtectWorkBook from './samples/Protectworkbook';
import Readonlycells from './samples/Readonlycells';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={< ProtectSheet />} />
        <Route path="/protect-workbook" element={< ProtectWorkBook />} />
        <Route path="/read-only-cells" element={< Readonlycells />} />
      </Routes>
    </div>
  );
};

export default App
