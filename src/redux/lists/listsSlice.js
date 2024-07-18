import { createSlice } from "@reduxjs/toolkit";

const listsSlice = createSlice({
  name: 'lists',
  initialState: {
    lists: []
  },
  reducers:{
    addList: (state)=>{
      state.lists.push({name: "List name", items:[{text: '', checked: false}]})
    },
    deleteList: (state, action)=>{
      const {index} = action.payload
      state.lists.splice(index, 1);
    },
    changeListName: (state, action)=>{
      const {index, newName} = action.payload
      state.lists[index].name = newName
    },
    addListItem: (state, action)=>{
      const {index} = action.payload;
      state.lists[index].items.push({text: '', checked: false})
    },
    deleteListItem: (state, action)=>{
      const {listIndex, itemIndex} = action.payload;
      state.lists[listIndex].items.splice(itemIndex, 1);
    },
    moveListItemUp: (state, action)=>{
      const {listIndex, itemIndex} = action.payload;
      if(itemIndex>0){
        let aux = state.lists[listIndex].items[itemIndex];
        state.lists[listIndex].items.splice(itemIndex, 1);
        state.lists[listIndex].items.splice(itemIndex-1, 0, aux);
      }
    },
    moveListItemDown: (state, action)=>{
      const {listIndex, itemIndex} = action.payload;
      if(itemIndex < state.lists[listIndex].items.length - 1){
        let aux = state.lists[listIndex].items[itemIndex];
        state.lists[listIndex].items.splice(itemIndex, 1);
        state.lists[listIndex].items.splice(itemIndex+1, 0, aux);
      }
    },
    updateListItemText: (state, action)=>{
      const {listIndex, itemIndex, newText} = action.payload;
      state.lists[listIndex].items[itemIndex].text = newText;
    },
    updateListItemChecked: (state, action)=>{
      const {listIndex, itemIndex} = action.payload;
      state.lists[listIndex].items[itemIndex].checked = !state.lists[listIndex].items[itemIndex].checked;
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