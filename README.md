# To Do List in React [![Netlify Status](https://api.netlify.com/api/v1/badges/2b22e7ed-ac8b-4da4-9eb0-0719e14c0a0d/deploy-status)](https://app.netlify.com/sites/todolist1518/deploys)

### This is a simple To-Do List created in React. I made this project to re-learn React and learn about Redux. See project [here](https://todolist1518.netlify.app/)

It is a simple CRUD[^1] application that lets you add as many lists as you want. Inside the lists, you can add new list items, edit them as you wish, move them up or down, and even remove items from the list.

> [!NOTE]
> The code needs refactoring 
>
> Home page is under construction 🏗

## What I would like to add to this project

1. Drag and Drop for moving list items
2. TypeScript
3. Testing
4. Firebase for Auth and for storing to-do lists for each user.

## Challenges I've encountered

1. Creating a custom checkbox
2. Deleting one item from the list
3. Moving a checked item to the end of the list

## How I overcame these challenges

### Custom Checkbox

At first, I wanted to use the `<input type='checkbox'>` element, but I soon learned that you cannot style it. Therefore, I created a  `<div>` that contained a `<span>` element. That `<span>` element was the checkbox that when clicked changed the background from transparent to blue, and vice versa.

Soon enough, that design looked out of place so I replaced it with some icons from [Material-UI](https://mui.com/material-ui/material-icons/), that when clicked switched between a checkmark and an empty box.

### Deleting one item from the list

This was the first big issue of the project. For the full details and solution check out the issue here: [Issue](https://github.com/alin1k/React-ToDoList/issues/1)

Deleting items from the list was causing problems with checked items because checkboxes were separated from these items. So, to solve this problem, I have updated the state to save items as objects containing a text field and a checked value (true/false). Now whenever a change is made to the item's text or the item's checked value, the state gets updated correctly.

By adding Redux, things got a lot easier and I got rid of the listUtils.js file that contained some functions that helped update the state of the app.

### Moving a checked item to the end of the list

This is a feature I wanted to have in my project but I couldn't make it work at first. I tried something but it only created an infinite loop and slowed down my application. See the issue and solution here : [Issue link](https://github.com/alin1k/React-ToDoList/issues/2)

[^1]: Create, Read, Update, and Delete

