import "./NavBar.css"

function NavBar({setLists, lists}) {
  return(
    <nav>
      <h1>To-Do List</h1>
      <ul>
        <li onClick={()=>{
          setLists((prevLists)=> [...prevLists,  {name:"List Name - click to edit", items:[ {text: "", checked: false} ]} ]) 
        }}>
          New List
        </li>
        <li
          onClick={()=>{
            setLists(prevLists => prevLists);
            localStorage.setItem("lists", JSON.stringify(lists));
          }}
        >
          Save List
        </li>
        <li>My Lists</li>
      </ul>
    </nav>
  )
}

export default NavBar;