import React from 'react'

const NavBar = () => {
    return (
        <nav>
            <div className='logo'>
                <h4>The Nav</h4>
            </div>
            <ul className='nav-links'>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Products</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;