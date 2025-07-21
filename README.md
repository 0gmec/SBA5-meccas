# INTERACTIVE BLOG AND PERSONAL PLATFORM

## Summary

This is a client side blogging application built with plain HTML, CSS, and JavaScript. 
It allows users to create, update, and delete personal blog posts directly in the browser. 
Posts are stored locally using localStorage, and persist across sessions. 
All interactions are handled through event listeners and dynamic DOM rendering, with basic input validation and user feedback.



---

## Core Functionality

### Post Creation
 Users submit a form with a post title and content. 
 Both fields are validated before the post is accepted.
 Validation errors appear inline.

### Post Display
 Posts are dynamically rendered to the page.
Each entry shows the title, content, and a timestamp.
Data is stored and retrieved from localStorage.

### Post Editing
Posts include an Edit button that loads content back into the form. Once edited, the post replaces the original and updates its timestamp.

### Post Deletion
Each post includes a **Delete** button. Deletion removes the post from both the UI and localStorage.

---


## Known Issues

**Validation Flow Can Be Inconsistent:**  
  The error messages in the form sometimes show at the wrong times or stack awkwardly, especially when switching quickly between actions like edit and submit. This is due to how validation and DOM updates are handled in the same cycle.

 **Use of switch (true) Made Debugging Harder:**  
Although switch(true) blocks allowed for grouped condition checks, they became harder to debug when reused across event handlers.
It was easy to miss which condition actually triggered without proper logging.


 **No Form Reset on Failed Validation:**  
  If the form submission fails validation, the user input is preserved but error states aren’t always cleared if you fix only one field, which may confuse users.

 **Global Variables and DOM:**  
  Variables like editing Post Id and postEntry are globally scoped and tied directly to DOM elements, making the logic harder to scale or refactor.

 **Multiple Buttons but Only One is Functional:**  
  Buttons like #editBtn and deleteBtn exist in the HTML form but are non-functional and redundant since the real edit/delete actions are tied to dynamically created buttons in the rendered posts.
  This might confuse users or developers reviewing the code. 

  **Display of time and date8**
  Unsure why time and date are displayed after its in localStorage. unaware of error and could not fixed, based off of examples it wasnt clear how to display, issue that im still solving, belived it has to do with the poustEntry where it should be placed inside the function instead.





---


---

## Resources

- [MDN – localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN – addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [JavaScript.info – Event Delegation](https://javascript.info/event-delegation)
- [MDN – Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Youtube – Rendering Post](https://www.youtube.com/watch?v=6_IjklVSQAA)
- [StackOverflow – Delete](https://stackoverflow.com/questions/54565161/javascript-todo-list-delete-and-complete-buttons)
- [GeekforGeeks – Tutorial](https://www.geeksforgeeks.org/javascript/blog-website-using-javascript/)

---



