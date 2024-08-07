import React from 'react'
import { useDispatch } from 'react-redux';
import { addList } from '../../../redux/lists/listsSlice';
import {ReactComponent as LaptopIlustration} from "assets/laptop-ilustration.svg"

function NoLists() {

  const dispatch = useDispatch();

  return (
    <div className="headerContainer">
      <h1 className="header">MY TO-DO LISTS</h1>
      <p>
        <span className="addListLink" onClick={()=>{dispatch(addList())}}>Add a List </span>
        Now and Take Control of Your Tasks
      </p>
      <LaptopIlustration className="list-ilustration"/>
    </div>
  )
}

export default NoLists