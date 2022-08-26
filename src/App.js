//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Page from "./components/Page";
import Contact from './components/Contact';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';

// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const subject = document.getElementById('subject');
// const message = document.getElementById('message');

// const contactForm = document.querySelector('contactStyle')
// contactForm.addEventListener('submit', (e) =>{
//   e.preventDefault();

//   let formData = {
//     name: name.value,
//     email: email.value,
//     subject: subject.value,
//     message: message.value
//   }
//   let xml = new XMLHttpRequest();
//   xml.open('POST', '/');
//   xml.setRequestHeader('content-type', 'application/json');
//   xml.onload = function(){
//     console.log(xml.responseText);
//     if(xml.responseText === 'success'){
//       alert('email sent');
//       name.value = '';
//       email.value = '';
//       subject.value = '';
//       message.value = '';
//     } else{
//       alert( 'something went wrong' )
//     }
//   }
//   xml.send(JSON.stringify.formData)

//   return formData

// });

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
