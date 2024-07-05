import "./Checkbox.css"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function Checkbox({checked, setChecked, index, updateItemCheckedValue}) {

  const handleCheck = async ()=>{
    const newChecked = !checked
    setChecked(newChecked);
    updateItemCheckedValue(index, newChecked)
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