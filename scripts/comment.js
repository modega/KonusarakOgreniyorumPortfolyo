$(document).ready(function() {
    
    var i = 0;

    $(document).on('submit', '#commentForm', function() {
        
        var now = new Date($.now());
        
        var name = $('#nameInput').val(); //Get the name of the commenter from the input
        var comment = $('#commentInput').val(); //Get the comment from the input
        var time = now.getHours() + ':' + now.getMinutes(); //get time 
        i += 1; 
        
        $('#commentContainer').append('<div id="comment'+ i +'" class="card d-block mb-2"><div class="card-body"><h5 class="card-title">'+ name +'</h5><h6 class="card-subtitle mb-2 text-muted">'+ time +'</h6><p class="card-text">'+ comment +'</p><button type="button" id="removeComment'+ i +'" class="btn btn-danger">Yorumu Sil</button></div></div>');
        return false;
    });

    $(document).on('click', '.btn-danger', function () {
        var commentID = $(this).parent().parent().attr('id');
        console.log(commentID);
        $('#'+commentID).remove();
    });
});