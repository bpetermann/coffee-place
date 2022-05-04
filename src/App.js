import classes from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menue from './pages/Menue';
import Contact from './pages/Contact';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className={classes.container}>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menue' element={<Menue />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
