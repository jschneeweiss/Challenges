import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/home/home.component';
import Voted from './components/voted/voted.components';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/voted' element={<Voted />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
