const container = document.querySelector(".container");
const bppForm = document.getElementById("bppForm");
const postTitle = document.getElementById("postTitle");
const postContent = document.getElementById("postContent");
const postTitleError = document.getElementById("postTitleError");
const postContentError = document.getElementById("postContentError");
const displayPost = document.getElementById("displayPost");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn")

let postEntry = []


//local Storage 
function displayTitle() {
    const input = document.getElementById("postTitle");
    localStorage.setItem("postTitle", input.value);

}
function displayContent() {
    const input = document.getElementById("postContent");
    localStorage.setItem("postContent", input.value);
}
//redering posts
function renderPosts() {
    displayPost.innerHTML = "";



postEntry.forEach(post => {
    const container = document.createElement("div");

    const postTitleDisplay = document.createElement("h2")
    postTitleDisplay.textContent = post.title;
    container.appendChild(postTitleDisplay);

    const postContentDisplay = document.createElement("p");
    postContentDisplay.textContent = post.content;
    container.appendChild(postContentDisplay);
// fucntion for edit button 
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit Post"
   editBtn.addEventListener("click", function () {
 for (let i = 0; i <postEntry.length; i++) {
    if (postEntry[i].id === post.id) {
        editIndex = i;
        break;
    }

 }

 switch(true) {
    case (editIndex !== -1):
        postTitle.value = postEntry[editIndex].title;
        postContent.vlaue = postEntry[editIndex].content;
        editingPostId = postEntry[editIndex].Id;
        document.getElementById("submitBtn").textContent = "Edited Post"
        break;
        default:


 }
})
container.appendChild(editBtn);
// fucntion for delete button 
const deleteBtn = document.createElement("button")
deleteBtn.textContent = "Delete Post";
deleteBtn.addEventListener("click", function () {
for (let i = 0; i < postEntry.length; i++) {
    if (postEntry[i].id === id) {
        deleteIndex = i;
        break;
    }
}

switch (true) {
    case(deleteIndex !== -1):
    postEntry.splice(deleteIndex, 1)
    localStorage.setItem("blogContent", JSON.stringify(postEntry));
    renderPosts();
    break;

default:
console.log("no deleted post made")

}
})
container.appendChild(deleteBtn);
displayPost.appendChild(container);
})


    
        
    }

    


//form submission 
bppForm.addEventListener("submit", function (event) {
    event.preventDefault();
    postTitleError.textContent = "";
    postContentError.textContent = "";

    const title = postTitle.value.trim ();
    const content = postContent.value.trim();

    let error = false;
    switch (true) {
        case (title === "" && content === ""):
        postTitleError.textContent = "No title displayed "
        postContentError.textContent = "No content displayed "
        error = true;
        break;
        
            case (title === "error" || content === "error"):
                postTitleError.textContent = "No title displayed"
            postContentError.textContent = "No content displayed"
            error = true;
            break;
            
            case(title.length < 1 ):
            postTitleError.textContent = "Title displayed needs to be longer"
            error = true;
            break;


            case (content === ""):
            postContentError.textContent = "No content displayed"
            error = true;
            break;

            
    }
    
    //date with local storage dispalyed
    if (error) return;
switch (true) {
    case (editingPostId !== null):
        for (let i = o; i <postEntry.length; i++) {
            switch(true) {
                case (postEntry[i].id === editingPost):
                    
            }
        }
}

    const newPost = {
        id: Date.now(),
        title: title, 
        content: content, 
        time: new Date().toLocaleTimeString()

    };
    //new post rendering loal storage 
    postEntry.push(newPost);
    localStorage.setItem("blogContent", JSON.stringify(postEntry));
    renderPosts();
    postTitle.value = "";
    postContent.value = "";
});


// entry local storage 
window.onload = function () {
    const saved = localStorage.getItem("blogContent");
    switch (true) {
 case (saved !== null):
 postEntry = JSON.parse(saved);
 renderPosts();
 break;
 default:
    postEntry = [];
    }
   
};