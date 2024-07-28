import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import ArticleIcon from '@mui/icons-material/Article';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import {ReactComponent as Ilustration} from "./ilustration.svg"

function Home() {
  return (
    <div className="home">
      <div className="grid-2">
        <div className='header-content'>
          <div>
            <h1 className='home-header'>To-Do List</h1>
            <h2 className='home-subheader'>Your Tasks, Simplified</h2>
          </div>

          <div className="button-group m-top-5">
            <h2 className='home-text'>Find it hard to focus on your tasks?</h2>
            <h2 className='home-text'>Stay organized and productive by managing your tasks easier</h2>
            <button href='#main-content' className='btn-secondary m-top-2'><a href='#main-content'>See More</a></button>
            <button className='btn-primary'><Link to="/lists">Get Started</Link></button>
          </div>
        </div>

        <Ilustration className='ilustration'/>
      </div>
      

      <div className="m-top-5" id='main-content'>
        <h1 className='cards-header color-primary font-header'>Why use a To-Do List?</h1>
        <div className="grid-3 gap-2 m-top-2">
          <div className="card p-1">
            <ArticleIcon className='icon-size-4 color-primary'/>
            <h2 className='card-header'>Improved Organization</h2>
            <p className='m-top-1'>Keep all your tasks in one place for better clarity</p>
          </div>
          <div className="card p-1">
            <TrendingUpIcon className='icon-size-4 color-primary'/>
            <h2 className='card-header'>Increased Productivity</h2>
            <p className='m-top-1'>Boost efficiency by breaking down tasks and tracking progress</p>
          </div>
          <div className="card p-1">
            <SentimentVerySatisfiedIcon className='icon-size-4 color-primary'/>
            <h2 className='card-header'>Reduced Stress</h2>
            <p className='m-top-1'>Alleviate anxiety by having a clear plan and manageable workload</p>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Home