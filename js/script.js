document.getElementById('submitComment').addEventListener('click', function(){
    var commentInput = document.getElementById('commentInput');
    var commentText = commentInput.value.trim();

    if(commentText) {
        var commentList = document.getElementById('commentList');
        var newComment = document.createElement('li');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);

        // Clear the input field after adding the comment
        commentInput.value = '';
    } else {
        alert('Please enter a comment.');
    }
});
