// export const sortItems = (items) => {
//   const uncheckedItems = items.filter(item => !item.checked);
//   const checkedItems = items.filter(item => item.checked);
//   return [...uncheckedItems, ...checkedItems];
// };

export const deleteItemFromList = (setItems, setLists, listIndex, index)=>{
  let modifiedItems = {};
  setItems((prevItems) => {
    prevItems = prevItems.filter((val, i) => i !== index)
    modifiedItems = prevItems;
    return prevItems;
  });

  updateAllListItems(setLists, listIndex, modifiedItems);
}

export const deleteList = (setLists, index)=>{
  setLists((prevItems) => prevItems.filter((val, i) => i !== index));
}

export const updateListName = (setLists, index, newValue) => {
  setLists(prevItems=> prevItems.map((list, i) => (i === index ? {...list, name: newValue} : list)));
}

export const updateListItem = (setLists, listIndex, newItemIndex, newItem) => {
  setLists((prevLists)=>{
    prevLists[listIndex].items[newItemIndex] = newItem;
    return prevLists;
  })
}

export const updateAllListItems = (setLists, listIndex,newItems)=>{
  setLists(prevLists=>{
    prevLists[listIndex].items = newItems;
    return prevLists;
  })
}

export const updateItemValue = (setItems, setLists, listIndex, index, newValue) =>{
  let modifiedItem = {};
  setItems((prevItems) => {
    prevItems = prevItems.map( (item, i) => (i === index? {...item, text: newValue} : item));
    modifiedItem = prevItems[index];

    return prevItems;
  })

  updateListItem(setLists, listIndex, index, modifiedItem);

}

export const updateItemCheckedValue = (setItems, setLists, listIndex, index, newValue)=>{
  let modifiedItem = 0;
  setItems((prevItems) => {
    prevItems = prevItems.map( (item, i) => (i === index? {...item, checked: newValue} : item));
    modifiedItem = prevItems[index];

    return prevItems;
  })

  updateListItem(setLists, listIndex, index, modifiedItem);
}

export const moveItemUpInTheList =(setItems, setLists, listIndex, index)=>{
  if(index > 0){
    setItems((prevItems) =>{ 
      const movingItem = prevItems[index];
      prevItems = prevItems.filter((val, i) => i !== index);
      prevItems = prevItems.toSpliced(index-1, 0 , movingItem);
      return prevItems;
    });
  }
}

export const moveItemDownInTheList = (setItems, setLists, listIndex, index)=>{
  setItems((prevItems) =>{ 
    const movingItem = prevItems[index];
    prevItems = prevItems.filter((val, i) => i !== index);
    prevItems = prevItems.toSpliced(index+1, 0 , movingItem);
    return prevItems;
  });
}