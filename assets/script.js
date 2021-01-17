// Display Current Date at top

var currentDate = moment().format('dddd, MMMM Do, YYYY')
$('#currentDay').append( document.createTextNode(currentDate))

// get present hour
var present = moment().hour()

var textInputValues = ["","","","","","","","",""];

if( localStorage.getItem('task')) {
  textInputValues = JSON.parse( localStorage.getItem('task'));
}

// loop through textInputValues array to fill correct textareas
for(var i = 0; i < textInputValues.length; i++){
  document.getElementById(`${i}`).value = textInputValues[i]
  if (9 + i < present) {
    $(`#${i}`).addClass('past');
  } else if (9 + i > present) {
    $(`#${i}`).addClass('future');
  } else if (9 + i === present) {
    $(`#${i}`).addClass('present');
  }
}

// click save button
$(".saveBtn").click(function (event) {
  
  // grabbing the first value of the event targets ID and turning it into an number
  let clickedId = parseInt( event.currentTarget.id[0] )

  // grabbing the value of the click targets sibling textarea
  var textInput = $(this).siblings("textarea").val()

  // putting the text input value into the correct spot in the textInuptValues array
  textInputValues[ clickedId ] = textInput

  saveTasks();

});

// save in local storage
var saveTasks = function() {
    localStorage.setItem("task", JSON.stringify(textInputValues));

    loadTasks();
}

// get from local storage
var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem('task'));
}

