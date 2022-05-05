import classes from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menue from './pages/Menue';
import Contact from './pages/Contact';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';

const DUMMY_CONTENT = [
  {
    name: 'About us',
    image: 'store',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    name: 'All Organic Beans',
    image: 'organic',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    name: 'Our Coffee',
    image: 'brewing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    name: 'History of Coffee',
    image: 'history',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

function App() {
  return (
    <Router>
      <Navbar />
      <div className={classes.container}>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home content={DUMMY_CONTENT} />} />
          <Route path='/menue' element={<Menue />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
