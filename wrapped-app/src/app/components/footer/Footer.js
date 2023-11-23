import React, {useState} from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import './footer.css';

const Footer = ({currentPage, setPage, numPages}) => {
    return ((currentPage < numPages) &&
        <div className='footer'>
            <Link
                activeClass="active"
                to={"page" + (currentPage+1).toString()}
                spy={true}
                smooth={true}
                onSetActive={() => {
                    setPage(currentPage+1)
                }}
            >
                <p>Next Page</p>
            </Link>
        </div>
    )
}

export default Footer;