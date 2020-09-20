//js for colors
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";
// }

// color1.addEventListener("input", setGradient);
// color2.addEventListener("input", setGradient);
//////////////////////////////////////////////////////////////////////////////////
//setting the time and date in the nav
setInterval(function(){
    $('.nav .clock').text(moment().format('llll'));
},1000)

//////////////////////////////////////
//add task function
var addButton=$("#add-task")
addButton.on('click',function(){
  var newTask=$("#input-task").val()
  if(newTask===""){
    alert("You must write something!")
  }
  else{
	var div=$('<div class="task-box"></div')
	var li= $('<h3></h3>');
	li.appendTo(div)
    div.appendTo($("#todo-list"));  ///working 
    li.append(newTask)
	$("#input-task").val("") //to clear the text input 
  }
})
//////////////////////////////////////
//remove task function
var remove = $('.remove-me');
remove.on('click',function(){
  var ul=$("#todo-list")
  if(ul.children().length === 0){ //working!!!
   alert("There is no more task to remove")
   }
   else{
  $("ul div ").last().remove()
  }
})
//////////////////////////////////////
//mark as completed
$("#todo-list").on('click',function(e){ 
    $('div ').each(function(){
            if(e.target.innerText===$(this).text()){
              if(e.target.style.textDecoration != 'line-through'){
                $(this).css('text-decoration','line-through')
                $(this).addClass('completed')
            }
            else{
                $(this).css({'text-decoration':''})
                if($('this .completed')){
                    $(this).removeClass('completed')
                }
            }
            }
          })
  
})
//////////////////////////////////
///new button that will remove the completed tasks only whenever the button is clicked.
var completed = $('.complete-button');
completed.appendTo($(".input-container"));
completed.on('click',function(){
    $('.completed').remove()

})

////////////////////////

//default hidden items
	$('.ES').hide()
	$('.SC').hide()
	$('.SS').hide()

function mySchedule(){
	$('.ES').hide()
	$('.SC').show()
	// $('.SS').show()
}

function employeesSchedule(){
	$('.ES').show()
	$('.SC').hide()
	$('buttons').show()
	// $('.SS').show()


}
	
function myHome(){
	$('.ES').hide()
	$('.SC').hide()
	$('.SS').hide()
}
///////////////////////////////
$('.martin').on('click',function(){
	$('.todo-tasks').show()
})
