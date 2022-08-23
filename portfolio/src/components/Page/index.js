import React from "react";
import PageContent from '../PageContent';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';


function Page ({currentPage}) {
   
    const renderPage = () => {

    };

    return (
      <section>
        <PageContent>{renderPage()}</PageContent>
      </section>
    )
}

export default Page;