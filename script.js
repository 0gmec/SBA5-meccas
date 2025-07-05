const container = document.querySelector(".container");
const bppForm = document.getElementById("bppForm");
const postTitle = document.getElementById("postTitle");
const postContent = document.getElementById("postContent");
const postTitleError =  document.getElementById("postTitleError");
const postContentError = document.getElementById("postContentError");
const displayPost = document.getElementById("displayPost");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn")

let post = []

function displayTitle() {
    const input = document.getElementById("postTitle");
    localStorage.setItem("postTitle", input.value);

}
function displayContent() {
    const input = document.getElementById("postContent");
    localStorage.setItem("postContent", input.value);
}

function showPost() {
    const displayPost = document.getElementById("displayPost");
    displayPost.innerHTML = "";
    
    const postTitle = document.getElementById("postTitle");
    postTitle.value = "";

    const postContent = document.getElementById("postContent");
    postContent.value = "";

    const editBtn = document.getElementById("editBtn");
    editBtn.value = "";

    const deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.value = ""; 

    showPost.appendChild(displayPost);
showPost.appendChild(postTitle);
showPost.appendChild(postContent);
showPost.appendChild(editBtn);
showPost.appendChild(deleteBtn);
}



bppForm.addEventListener("submit", function (event) {
    event.preventDefault();
})

editBtn.addEventListener("click", function(){

})

deleteBtn.addEventListener("click", function(){
    
})