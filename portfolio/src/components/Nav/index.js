import React, {useEffect} from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers'


function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        CurrentPage,
    } = props;

    return (
        <nav className="nav-bar">
        {props.pages.map(item => (
          <li className="nav-bar-item" key={item.name}>
             <input
         onClick={setCurrentPage}
        />
          </li>
        ))}
      </nav>
    );

}

export default Nav;