# To Do List in React

This is a simple to-do list created in React. I made this project to re-learn React.

It is a simple CRUD[^1] application that lets you add as many lists as you want. Inside the lists you can add new list items, move them up or down and even remove items from the list.

> [!WARNING]
> The project is still in progress and this is not the end result.

## Challenges I've encountered

1. Creating a custom checkbox
2. Deleting one item from the list
3. Moving a checked item to the end of the list



## How I overcame these challenges

### Custom Checkbox

At first, I wanted to use the `<input type='checkbox'>` element but soon I found out that you cannot style it. Therefore, I created a  `<div>` that contained a `<span>` element. That `<span>` element was the checkbox that when clicked changed the background from transparent to blue, and vice versa.

Soon enough, that design looked out of place so I replaced it with some icons from [Material-UI](https://mui.com/material-ui/material-icons/), that when clicked switched between a checkmark and an empty box.

### Deleting one item from the list

This was the first big issue of the project. For the full details and solution check out the [Issue](https://github.com/alin1k/React-ToDoList/issues/1)




[^1]: Create, Read, Update, and Delete

