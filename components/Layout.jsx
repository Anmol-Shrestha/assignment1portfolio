import {React, useState} from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {

    const clickHandler = ()=>{
        document.getElementById('navi-toggle').checked= false;
    }
 
 return (
 <>

<div className="navigation">

    <input type="checkbox" id='navi-toggle' className="navigation__checkbox" />
    <label htmlFor="navi-toggle" className='navigation__button'>
        <span className='navigation__icon'>&nbsp;</span>
    </label>

    <div className="navigation__background">&nbsp;</div>

    <nav className="navigation__nav">
    <ul className='navigation__list'>
        <li className='navigation__item'><Link onClick={clickHandler} className='navigation__link' to="/">Home</Link> </li>
        <li className='navigation__item'><Link onClick={clickHandler} className='navigation__link' to="/about">About</Link></li>
        <li className='navigation__item'><Link onClick={clickHandler} className='navigation__link' to="/services">Services</Link></li>
        <li className='navigation__item'><Link onClick={clickHandler} className='navigation__link' to="/project">Project</Link></li>
        <li className='navigation__item'><Link onClick={clickHandler} className='navigation__link' to="/contact">Contact</Link></li>
    </ul>
     </nav>

 </div>

 
</>
 
 );
}
