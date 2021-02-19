import React, {useState} from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
    const [click, setClick] = useState(false);


    const clicked = () => {
        setClick(!click)
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar__logo'>
                        TRVL <i className="fas fa-mountain"></i>
                    </Link>
                    <div className="menu-icon"> 
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={clicked}></i>  
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
