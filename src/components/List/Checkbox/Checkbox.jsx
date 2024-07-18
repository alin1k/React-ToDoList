import "./Checkbox.css"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useDispatch } from "react-redux";
import { updateListItemChecked } from "../../../redux/lists/listsSlice";

function Checkbox({itemIndex, listIndex, setCheckedValue, checkedValue}) {

  const dispatch = useDispatch();

  const handleCheck = ()=>{
    setCheckedValue(prevVal => !prevVal);
    dispatch(updateListItemChecked({listIndex: listIndex, itemIndex: itemIndex}))
  }

  return (
    <div className="customCheckbox">
      {checkedValue ? 
        <CheckBoxIcon onClick={handleCheck} />
        :
        <CheckBoxOutlineBlankIcon onClick={handleCheck} />
      }
    </div>
  )
}

export default Checkbox;