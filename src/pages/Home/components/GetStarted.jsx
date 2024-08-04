import React from 'react'
import {ReactComponent as Ilustration} from "../../../assets/woman-ilustration.svg"
import { Link } from 'react-router-dom';

function GetStarted() {
  return (
    <div className="grid-2 m-top-5">
      <Ilustration className='ilustration'/>
      <div className='text-center grid-center'>
        <h1 className="heading color-primary font-heading">Get Started Now</h1>
        <h2 className='home-text m-top-2 text-center'>Get Started Today and Take Control of Your Tasks</h2>
        <Link to="/lists" className='btn btn-primary m-top-2'>Go to My Lists</Link>
      </div>
    </div>
  )
}

export default GetStarted