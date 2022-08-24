import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page"
import Footer from "./components/Footer";
import About from './components/About';

function App() {
  const [pages] = useState([
    { name: 'About'},
    { name: 'Contact'},
    { name: 'Footer'},
    { name: 'Header'},
    { name: 'Nav'},
  ]);
  return (
    <div className="App">
      <Header/>;
      <Nav/>;
      <Page/>;
      <Footer/>;
      <About/>;   
    </div>
  );
}

export default App;
