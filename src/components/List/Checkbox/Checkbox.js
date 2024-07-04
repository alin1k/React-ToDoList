import "./Checkbox.css"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function Checkbox({checked, setChecked}) {

  const handleCheck = ()=>{
    setChecked(!checked);
  }

  return (
    <div className="customCheckbox">
      {checked ? 
        <CheckBoxIcon onClick={handleCheck} />
        :
        <CheckBoxOutlineBlankIcon onClick={handleCheck} />
      }
    </div>
    
  )
}

export default Checkbox;