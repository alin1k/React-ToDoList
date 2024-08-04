import React from 'react'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import ChecklistIcon from '@mui/icons-material/Checklist';


function HowItWorks() {
  return (
    <>
      <h1 className="heading color-primary font-heading m-top-5">How It Works</h1>

      <div className="container hiw-grid m-top-2">

        <div className='text-end py-2'>
          <h2 className="number-heading">1</h2>
          <h3 className='number-subheading'>Create a New List</h3>
          <p className='text'>Start by adding a new list to organize your tasks</p>
        </div>

        <div className="circle"></div>

        <PostAddIcon className='icon-size-4 color-primary hiw-icon text-start'/>

        <BorderColorIcon className='icon-size-4 color-primary hiw-icon' />

        <div className="circle"></div>

        <div className='py-2'>
          <h2 className="number-heading">2</h2>
          <h3 className='number-subheading'>Name Your List</h3>
          <p className='text'>Give your list a meaningful name to keep things organized</p>
        </div>

        <div className='text-end py-2'>
          <h2 className="number-heading">3</h2>
          <h3 className='number-subheading'>Add List Items</h3>
          <p className='text'>Add new items to your list, one task at a time</p>
        </div>

        <div className="circle"></div>

        <PlaylistAddIcon className='icon-size-4 color-primary hiw-icon'/>

        <MoveUpIcon className='icon-size-4 color-primary hiw-icon'/>

        <div className="circle"></div>

        <div className='py-2'>
          <h2 className="number-heading">4</h2>
          <h3 className='number-subheading'>Organize Your Tasks</h3>
          <p className='text'>Move items up or down in the list to prioritize your tasks</p>
        </div>

        <div className='text-end py-2'>
          <h2 className="number-heading">5</h2>
          <h3 className='number-subheading'>Check Off Completed Tasks</h3>
          <p className='text'>Mark tasks as complete by checking them off your list</p>
        </div>

        <div className="circle"></div>

        <ChecklistIcon className='icon-size-4 color-primary hiw-icon'/>
      </div>
    </>
  )
}

export default HowItWorks