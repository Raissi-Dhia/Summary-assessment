$('body').append('<ul class="one"></ul>'); 
$('body').append('<input type="checkbox" class="two">');
$('body').append('<input type="checkbox" class="two">');
$('body').append('<input type="checkbox" class="two">');
$('body').append('<button type="button" id ="delete" class="five">Create!</button>') ;
$('body').append('<button type="button" id="create" class="six">remove!</button>') ;


$('#create').click(function) {
if($(".two").attr('checked') === true) {
	$('ul').append('<li class="one">black</li>');
}else if ($(".two").attr('checked') === false){ //  run out of time couldn't think about the condition well  .. but in case we have 2checkboxes checked we add  that (purple = blue + red), (green = blue + yellow), (orange = red + yellow)
//else we add  (yellow, blue or red) using the append and giving it a specific class that matches the colors 
}
}


$('#delete').click(function) {
	// we are going to set a condition just like the previous function and in case it's checked we are going to delete all the list elements using  it's id .delete() else nothing happens and the other stays
	

}