export const deleteItemFromList = (setItems, index)=>{
  setItems((prevItems) => prevItems.filter((val, i) => i !== index));
}

export const updateItemValue = (setItems, index, newValue) =>{
  setItems((prevItems) => prevItems.map( (item, i) => (i === index? {...item, text: newValue} : item)))
}

export const updateItemCheckedValue = (setItems, index, newValue)=>{
  setItems((prevItems) => prevItems.map( (item, i) => (i === index? {...item, checked: newValue} : item)))
}

export const moveItemUpInTheList = (setItems, index)=>{
  if(index > 0){
    setItems((prevItems) =>{ 
      const movingItem = prevItems[index];
      prevItems.filter((val, i) => i !== index);
      prevItems.toSpliced(index-1, 0 , movingItem);
      return prevItems;
    });
  }
}

export const moveItemDownInTheList = (setItems, index)=>{
  setItems((prevItems) =>{ 
    const movingItem = prevItems[index];
    prevItems.filter((val, i) => i !== index);
    prevItems.toSpliced(index+1, 0 , movingItem);
    return prevItems;
  });
}