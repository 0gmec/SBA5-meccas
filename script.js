const container = document.querySelector(".container")
const bppForm = document.getElementById("bppForm")
const postTitle = document.getElementById("postTitle")
const postContent = document.getElementById("postContent")
const errorMessage =  document.querySelectorAll(".errorMessage")
const displayPost = document.getElementById("displayPost")

let post = []

function display() {
    const input = document.getElementById("postTitle");
    localStorage.setItem("postTitle", input.value);

}
function display() {
    const input = document.getElementById("postContent");
    localStorage.setItem("postContent", input.value);
}

function renderPost() {
    const displayPost = document.getElementById("displayPost");
    displayPost.innerHTML = "";
    
    const postTitle = document.getElementById("postTitle");
    postTitle.value = "";

    const postContent = document.getElementById("postContent");
    postContent.innerHTML = "";
}


bppForm.addEventListener("submit", function (event) {
    event.preventDefault();
})