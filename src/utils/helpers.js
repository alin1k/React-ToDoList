export function truncateItemText(item, maxLength){
  if(item.text.length > maxLength) {
    return item.text.substring(0, maxLength) + "...";
  }
  return item.text
}