import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../../utils/localStorage";

const moveCheckedItemsToBottom = (array)=>{
  let newArray = [...array];
  const checkedItems = []
  newArray = newArray.filter((item)=>{
    if(!item.checked){
      return item
    }else{
      checkedItems.push(item);
    }
  })
  return [...newArray, ...checkedItems]
}

const initialState ={
  lists: loadState() || []
}

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers:{
    addList: (state)=>{
      state.lists.push({name: '', items:[{text: '', checked: false}]})
      saveState(state.lists);
    },
    deleteList: (state, action)=>{
      const {index} = action.payload
      state.lists.splice(index, 1);
      saveState(state.lists);
    },
    changeListName: (state, action)=>{
      const {index, newName} = action.payload
      state.lists[index].name = newName
      saveState(state.lists);
    },
    addListItem: (state, action)=>{
      const {index} = action.payload;
      state.lists[index].items.push({text: '', checked: false})
      state.lists[index].items = moveCheckedItemsToBottom(state.lists[index].items);
      saveState(state.lists);
    },
    deleteListItem: (state, action)=>{
      const {listIndex, itemIndex} = action.payload;
      state.lists[listIndex].items.splice(itemIndex, 1);
      saveState(state.lists);
    },
    moveListItemUp: (state, action)=>{
      const {listIndex, itemIndex} = action.payload;
      if(itemIndex>0  && !state.lists[listIndex].items[itemIndex].checked){
        const aux = state.lists[listIndex].items[itemIndex];
        state.lists[listIndex].items.splice(itemIndex, 1);
        state.lists[listIndex].items.splice(itemIndex-1, 0, aux);
        saveState(state.lists);
      }
    },
    moveListItemDown: (state, action)=>{
      const {listIndex, itemIndex} = action.payload;
      if(itemIndex < state.lists[listIndex].items.length - 1 && !state.lists[listIndex].items[itemIndex+1].checked){
        const aux = state.lists[listIndex].items[itemIndex];
        state.lists[listIndex].items.splice(itemIndex, 1);
        state.lists[listIndex].items.splice(itemIndex+1, 0, aux);
        saveState(state.lists);
      }
    },
    updateListItemText: (state, action)=>{
      const {listIndex, itemIndex, newText} = action.payload;
      state.lists[listIndex].items[itemIndex].text = newText;
      saveState(state.lists);
    },
    updateListItemChecked: (state, action)=>{
      const {listIndex, itemIndex} = action.payload;
      state.lists[listIndex].items[itemIndex].checked = !state.lists[listIndex].items[itemIndex].checked;
      state.lists[listIndex].items = moveCheckedItemsToBottom(state.lists[listIndex].items);
      saveState(state.lists);
    }
  }
})

export const {
  addList,
  deleteList,
  changeListName,
  addListItem,
  deleteListItem,
  moveListItemUp,
  moveListItemDown,
  updateListItemText,
  updateListItemChecked
} = listsSlice.actions;

export default listsSlice.reducer;