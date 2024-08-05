import React from 'react'
import ListContent from './ListContent'

function Sidebar({lists}) {
  return (
    <div className="listNamesContainer">
      <h2>Your Lists</h2>
      <div className="listNames">
        {lists.map((list, listIndex)=>
          <ListContent key={"list"+listIndex} list={list} listIndex={listIndex}/>
        )}
      </div>
    </div>
  )
}

export default Sidebar