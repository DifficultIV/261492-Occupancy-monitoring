import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import Home from './pages/Home';
import Record from './pages/Record';
import About from './pages/About';
import React,{useEffect,useState} from 'react'
function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/db", {mode: "cors"})
      .then(res => res.json())
      .then((result) => { 
      setData(result)
      })
  }, [])
  console.log(data)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/record' element={<Record data={data}/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
