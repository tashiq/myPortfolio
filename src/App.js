//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import ContactForm from './Pages/ContactForm/ContactForm';
import Home from './Pages/Home/Home/Home';
import Navigation from './Shared/Navigation/Navigation';
import Blogs from './Pages/Blogs/Blogs';
import SingleProject from './Pages/SingleProject/SingleProject';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects/:id" element={<SingleProject />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
