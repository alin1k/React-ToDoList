import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

function Cards() {
  return (
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
  )
}

export default Cards