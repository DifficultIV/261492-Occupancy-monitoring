import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import Home from './pages/Home';
import Record from './pages/Record';
import About from './pages/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/record' element={<Record/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
