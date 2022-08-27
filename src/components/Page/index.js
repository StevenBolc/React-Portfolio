import React from "react";
import PageContent from '../PageContent';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function Page({ currentPage }) {

const renderPage = () => {
 if (currentPage === 'About') {
  return <About/>
 } else if (currentPage === 'Portfolio') {
  return <Portfolio/>
 } else if (currentPage === 'Contact') {
  return <Contact/>
 } else if (currentPage === 'Resume') {
  return <Resume/>
 }
};

  return (
    <div>
        {renderPage()}
        <PageContent/>
    </div>
  );
}

export default Page;