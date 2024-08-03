import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


function ListContent({list, listIndex}) {

  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <div className="listNameArrow" onClick={()=>{setDropDown(prev => !prev)}}>
        {dropDown? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
        <h3>{list.name}</h3>
      </div>
      <div className="listContent" style={dropDown? {display: "inline-block"} : {display: "none"}}>
        {list.items.map((item , itemIndex)=>
          <p 
            key={"item" + listIndex.toString() + itemIndex.toString()}
            style={item.checked ? {textDecoration: "line-through"} : {textDecoration: "none"}}
          >
            {item.text.length <= 20 ? item.text : item.text.substring(0, 20) + "..."}
          </p>
        )}
      </div>
    </>
  )
}

export default ListContent