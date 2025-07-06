const container = document.querySelector(".container");
const bppForm = document.getElementById("bppForm");
const postTitle = document.getElementById("postTitle");
const postContent = document.getElementById("postContent");
const postTitleError = document.getElementById("postTitleError");
const postContentError = document.getElementById("postContentError");
const displayPost = document.getElementById("displayPost");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn")

let newPost = {
      
        id: Date.now(),
        title: title, 
        content: content, 
        time: new Date().toLocaleTimeString()

    };
    newPost.push(newPost);



function displayTitle() {
    const input = document.getElementById("postTitle");
    localStorage.setItem("postTitle", input.value);

}
function displayContent() {
    const input = document.getElementById("postContent");
    localStorage.setItem("postContent", input.value);
}

function renderPosts(newPost, displayPost) {
    const displayPost = document.getElementById(displayPost);
    displayPost.innerHTML = "";

newPost.forEach(post => {
    const container = document.createElement("div");

    const postTitle = document.createElement("h2")
    postTitle.textContent = post.title;
    postTitle.appendChild(postTitle);

    const postContent = document.createElement("p");
    postContent.textContent = post.content;
    postContent.appendChild(postContent);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit Post"

    editBtn.addEventListener("click", function () {

})
container.appendChild(editBtn);

const deleteBtn = document.createElement("button")
deleteBtn.textContent = "Delete Post";

deleteBtn.addEventListener("click", function () {

})
container.appendChild(remove);
})
displayPost.appendChild(container);

    
        
    }

    



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
    if (error) return;
    const newPost = {
        id: Date.now(),
        title: title, 
        content: content, 
        time: new Date().toLocaleTimeString()

    };
    post.push(newPost);
    localStorage.setItem("blogContent", JSON.stringify(post));
    renderPosts();
    postTitle.value = "";
    postContent.value = "";
});



window.onload = function () {
    const saved = localStorage.getItem("blogContent");
    switch (true) {
 case (saved !== null):
 newPost = JSON.parse(saved);
 renderPosts();
 break;
 default:
    newPost = [];
    }
   
};