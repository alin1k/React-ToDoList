import React from 'react'
import { useDispatch } from 'react-redux'
import { addList } from '../../../redux/lists/listsSlice';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddNewListButton() {

  const dispatch = useDispatch();

  return (
    <div className='addListButtonContainer'>
      <button className="addListButton" onClick={()=>{
        dispatch(addList())
      }}>
        <AddCircleIcon className="addIcon"/>
        Add New List
      </button>
    </div>
    
  )
}

export default AddNewListButton