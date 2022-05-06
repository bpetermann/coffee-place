import React, { useState, useEffect } from 'react';
import classes from './App.module.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Menue from './pages/Menue';
import Contact from './pages/Contact';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Modal from '../src/components/modal/Modal';

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
  const [modal, setModal] = useState(false);

  const modalToggleHandler = () => {
    setModal((prevState) => !prevState);
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add('no-scroll');
      console.log('hi');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [modal]);

  return (
    <Router>
      <Navbar toggleModal={modalToggleHandler} />
      {modal && <Modal onClose={modalToggleHandler} />}
      <div className={classes.container}>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home content={DUMMY_CONTENT} />} />
          <Route path='/menue' element={<Menue />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
