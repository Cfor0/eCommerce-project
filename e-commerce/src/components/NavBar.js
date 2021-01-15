import React, { Component } from 'react'
import '../App.css'

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