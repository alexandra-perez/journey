import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import Home from '../src/components/Home/Home';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Footer from '../src/components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<SignUpForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
