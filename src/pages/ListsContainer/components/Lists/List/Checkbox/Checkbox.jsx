import "./Checkbox.css"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useDispatch, useSelector } from "react-redux";
import { updateListItemChecked } from "../../../../../../redux/lists/listsSlice.js";

function Checkbox({itemIndex, listIndex}) {

  const dispatch = useDispatch();
  const checked = useSelector(state=> state.lists[listIndex].items[itemIndex].checked)

  const handleCheck = ()=>{
    dispatch(updateListItemChecked({listIndex: listIndex, itemIndex: itemIndex}))
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