//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Page from "./components/Page"
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';



function App() {
  const [page, setPage] = useState('About');
 

  return (
    <div className="App">
      <Header/>
        <Nav page={page} setPage={setPage}/>
        <main>
          <Page currentPage={page}/>
        </main>
        <Footer/>
    </div>
    
  );
}

export default App;
