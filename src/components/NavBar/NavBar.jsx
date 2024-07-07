import "./NavBar.css"

function NavBar({setLists}) {
  return(
    <nav>
      <h1>To-Do List</h1>
      <ul>
        <li onClick={()=>{
          setLists((prevLists)=> [...prevLists,  {name:"List Name - click to edit", items:[ {text: "List text - click to edit", checked: false} ]} ]) 
        }}>
          New List
        </li>
        <li>Save List</li>
        <li>My Lists</li>
      </ul>
    </nav>
  )
}

export default NavBar;