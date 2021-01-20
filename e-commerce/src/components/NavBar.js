import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

class NavBar extends Component {

    navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        nav.classList.toggle('nav-active');

        navLinks.forEach((ele, index) => {
            if (ele.style.animation) {
                ele.style.animation = '';
            } else {
                ele.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + .3}s`
            }
        })

        burger.classList.toggle('toggle');

    }
    render() {

        return (
            <nav className='stroke'>
                <div className='logo'>
                    <h4>Ace-Run Discs</h4>
                </div>
                <ul className='nav-links'>
                    <li>
                        <Link to='/'> Home</Link>
                    </li>
                    <li>
                    <Link to='/products'> Products</Link>
                    </li>
                    <li>
                    <Link to='/contact'> Contact</Link>
                    </li>
                </ul>
                <div className='burger' onClick={this.navSlide}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </nav>
        )
    }
}

export default NavBar;