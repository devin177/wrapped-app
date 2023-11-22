import React, {useState} from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import './header.css';

const Header = ({currentPage, setPage}) => {
    return (currentPage > 1 &&
        <div className='header'>
            <Link
                activeClass="active"
                to={"page1"}
                spy={true}
                smooth={true}
                offset={0}
                onSetActive={() => setPage(1)}
            >
                <p>Scroll to Top</p>
            </Link>
        </div>
    )
}

export default Header;