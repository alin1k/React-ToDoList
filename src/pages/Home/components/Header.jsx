import React from 'react'
import {ReactComponent as HeaderIlustration} from "../../../assets/header-ilustration.svg"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-grid">
      <div className='header-content'>
        <div>
          <h1 className='home-header'>To-Do List</h1>
          <h2 className='home-subheader'>Your Tasks, Simplified</h2>
        </div>

        <div className="button-group m-top-5">
          <h2 className='home-text'>Find it hard to focus on your tasks?</h2>
          <h2 className='home-text m-top-1'>Stay organized and productive by managing your tasks easier</h2>
          <a 
            href='#main-content' 
            className='btn btn-secondary m-top-2 m-end-2'
            onClick={(e)=>{
              e.preventDefault();

              document.querySelector('#main-content').scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >See More
          </a>
          <Link to="/lists" className='btn btn-primary m-top-2'>Get Started</Link>
        </div>
      </div>

      <HeaderIlustration className='ilustration'/>
    </div>
  )
}

export default Header