$(document).ready(function(){
    

$('form').on('submit', function(e){
    e.preventDefault();
    const input = $('input').val();

    const newLi = $('<li style="display: none"></li>');
    $(`
    <div class="container-lista ">
    <li>${input}</li>
    </div>
    `).appendTo(newLi);

    $(newLi).click(function(){
        $(newLi).css('text-decoration','line-through red');
    
    })


    $(newLi).appendTo('ul');
    $('input').val("");
    $(newLi).fadeIn(1000);

})




})