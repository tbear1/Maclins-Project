
import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Supras from './pages/Supras';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/supras' element={<Supras />} />
      </Routes>
      
    </div>
  );
}

export default App;
