import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';
import Navbar from './Pages/Shared/Navbar';
function App() {
  return (
    <div className="App">
       <h1>Welcome to React Router!</h1>
       <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;
