import React, { useState } from 'react';
import style from './NavBar.module.css'; // Assuming a CSS file for styling
// import "./NavBar.css"; // Assuming a CSS file for styling
import Menu, {HamButtom, MenuLinks} from './Menu.jsx'; // Importing the Menu component


function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={style.NavBar} style={{
            borderBottom: '3px solid black',
            height: '78px',
            backgroundColor: '#6A3FFF',
        }}>
            <div className={style['navbar-container']}>
                <Menu />
                <HamButtom toggleMenu={toggleMenu} />
            </div>
            {isMenuOpen && (
                <MenuLinks />
            )}
        </nav>
    );
}

export default NavBar;