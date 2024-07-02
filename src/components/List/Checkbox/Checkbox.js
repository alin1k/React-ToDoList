import "./Checkbox.css"

function Checkbox({checked, setChecked}) {

  const handleCheck = ()=>{
    setChecked(!checked);
  }

  return (
    <div className="customCheckbox">
      <span className="checkmark" onClick={handleCheck} style={checked? {backgroundColor:"#102C57"} : {background: "transparent"}}></span>
    </div>
  )
}

export default Checkbox;