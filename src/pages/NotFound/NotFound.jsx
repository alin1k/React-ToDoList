import React from 'react'
import "./NotFound.css"
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function NotFound() {
  return (
    <div className='not-found-container'>
      <SentimentVeryDissatisfiedIcon className='not-found-icon'/>
      <h1>The page you are looking for does not exist</h1>
    </div>
  )
}

export default NotFound