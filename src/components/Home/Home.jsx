import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import ArticleIcon from '@mui/icons-material/Article';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import {ReactComponent as Ilustration} from "./ilustration.svg"
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import ChecklistIcon from '@mui/icons-material/Checklist';

function Home() {
  return (
    <div className="home">
      <div className="header-grid">
        <div className='header-content'>
          <div>
            <h1 className='home-header'>To-Do List</h1>
            <h2 className='home-subheader'>Your Tasks, Simplified</h2>
          </div>

          <div className="button-group m-top-5">
            <h2 className='home-text'>Find it hard to focus on your tasks?</h2>
            <h2 className='home-text m-top-1'>Stay organized and productive by managing your tasks easier</h2>
            <a href='#main-content' className='btn btn-secondary m-top-2 m-end-2'>See More</a>
            <Link to="/lists" className='btn btn-primary'>Get Started</Link>
          </div>
        </div>

        <Ilustration className='ilustration'/>
      </div>
      

      <div className="m-top-5 container" id='main-content'>
        <h1 className='heading color-primary font-heading'>Why use a To-Do List?</h1>
        <div className="grid-3 gap-2 m-top-2 container">
          <div className="card p-1">
            <ArticleIcon className='icon-size-4 color-primary'/>
            <h2 className='card-header'>Improved Organization</h2>
            <p className='m-top-1 text'>Keep all your tasks in one place for better clarity</p>
          </div>

          <div className="card p-1">
            <TrendingUpIcon className='icon-size-4 color-primary'/>
            <h2 className='card-header'>Increased Productivity</h2>
            <p className='m-top-1 text'>Boost efficiency by breaking down tasks and tracking progress</p>
          </div>

          <div className="card p-1">
            <SentimentVerySatisfiedIcon className='icon-size-4 color-primary'/>
            <h2 className='card-header'>Reduced Stress</h2>
            <p className='m-top-1 text'>Alleviate anxiety by having a clear plan and manageable workload</p>
          </div>
        </div>
      </div>
      
      <h1 className="heading color-primary font-heading m-top-5">How It Works</h1>

      <div className="container grid-2 gap-5 row-gap-5">

        <div className='text-end'>
          <h2 className="number-heading">1</h2>
          <h3 className='number-subheading'>Create a New List</h3>
          <p className='text'>Start by adding a new list to organize your tasks</p>
        </div>

        <PostAddIcon className='icon-size-4 color-secondary hiw-icon'/>

        <BorderColorIcon className='icon-size-4 color-secondary hiw-icon' />

        <div>
          <h2 className="number-heading">2</h2>
          <h3 className='number-subheading'>Name Your List</h3>
          <p className='text'>Give your list a meaningful name to keep things organized</p>
        </div>

        <div className='text-end '>
          <h2 className="number-heading">3</h2>
          <h3 className='number-subheading'>Add List Items</h3>
          <p className='text'>Add new items to your list, one task at a time</p>
        </div>

        <PlaylistAddIcon className='icon-size-4 color-secondary hiw-icon'/>

        <MoveUpIcon className='icon-size-4 color-secondary hiw-icon'/>

        <div>
          <h2 className="number-heading">4</h2>
          <h3 className='number-subheading'>Organize Your Tasks</h3>
          <p className='text'>Move items up or down in the list to prioritize your tasks</p>
        </div>

        <div className='text-end '>
          <h2 className="number-heading">5</h2>
          <h3 className='number-subheading'>Check Off Completed Tasks</h3>
          <p className='text'>Mark tasks as complete by checking them off your list</p>
        </div>

        <ChecklistIcon className='icon-size-4 color-secondary hiw-icon'/>
      </div>

      

    </div>
  )
}

export default Home