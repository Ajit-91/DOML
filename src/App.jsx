import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className="container mx-auto px-7">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

    </div>
  )
}

export default App
