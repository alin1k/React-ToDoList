import React from 'react'
import AddNewListButton from "../../components/AddNewListButton";
import List from "./List/List"

function Lists({lists}) {
  return (
    <div className="grid">
      {lists.map((list , index)=>
        <List 
          key={index} 
          index={index}
        />
      )}
      <AddNewListButton/>
    </div>
  )
}

export default Lists