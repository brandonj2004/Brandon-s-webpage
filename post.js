
function createPost(event) {

    event.preventDefault();

    let text = document.getElementById("text").value;

    let post = {
        text: text
    };

    console.log(post);
}


document.addEventListener("DOMContentLoaded", function() {

    let postForm = document.getElementById("postForm");

    if (postForm) {
        postForm.addEventListener("submit", createPost);
    }

});
