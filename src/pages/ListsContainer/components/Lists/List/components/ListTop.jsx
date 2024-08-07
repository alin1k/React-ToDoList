import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeListName, deleteList } from '../../../../../../redux/lists/listsSlice';
import { confirmDeleteAlert, deleteSuccesAlert } from 'utils/alerts';
import CloseIcon from '@mui/icons-material/Close';

function ListTop({listIndex}) {

  const name = useSelector(state => state.lists[listIndex].name)
  const dispatch = useDispatch();
  const [listName, setListName] = useState(name);

  useEffect(()=>{
    setListName(name);
  }, [name]);

  return (
    <div className="listTop">
      <input 
        className="listName" 
        autoComplete="off"
        name="list-name"
        value={listName}
        placeholder="Type your list name here"
        onChange={e =>{ 
          setListName(e.target.value)
          dispatch(changeListName({index: listIndex, newName: e.target.value}))
        }}
      />
      <CloseIcon 
        className="closeListButton" 
        onClick={()=>{
          confirmDeleteAlert().then((result) => {
            if (result.isConfirmed) {
              dispatch(deleteList({index: listIndex}));
              deleteSuccesAlert();
            }
          });
        }}
      />
    </div>
  )
}

export default ListTop