import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import AddPassword from './components/AddPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login /> } />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:userid/home" element={<HomePage />} />
        <Route path="/user/:userid/add-password" element={<AddPassword /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
