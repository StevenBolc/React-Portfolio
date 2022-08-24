import React, {useState} from 'react';
import '../styles/Header.css';
import {capitalizeFirstLetter} from '../../utils/helpers'


const styles = {
  navbarStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};


function Nav() {
  const [currentPage, setCurrentPage] = useState('');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    // if (currentPage === 'About') {
    //   return <Home />;
    // }
    // if (currentPage === 'About') {
    //   return <About />;
    // }
    // if (currentPage === 'Blog') {
    //   return <Blog />;
    // }
    // return <Contact />;
  };


    // const {
    //     pages = [],
    //     setCurrentPage,
    //     CurrentPage,
    // } = props;

    return (
        <nav style={styles.navbarStyle} className="navbar">
          <a style={styles.navbarStyle} href="/">Welcome</a>
        {/* {props.pages.map(item => (
          <li className="nav-bar-item" key={item.name}>
             <input
         onClick={setCurrentPage}
        />
          </li>
        )
        )} */}
      </nav>
    );

}

export default Nav;




 



