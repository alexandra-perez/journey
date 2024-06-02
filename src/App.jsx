import { useState } from 'react';
import Header from "../src/components/Header/Header";
import Home from "../src/components/Home/Home";
import Footer from '../src/components/Footer/Footer';
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <Home />
      <Footer/>
    </>
  )
}

export default App
