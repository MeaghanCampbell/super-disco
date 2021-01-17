// Display Current Date at top

var currentDate = moment().format('dddd, MMMM Do, YYYY')
$('#currentDay').append( document.createTextNode(currentDate))

// Blocks color coded if they are past present or future

  var pastPresentFuture = function () {
    var past = moment().subtract(1, 'hour')
    var present = moment().hour()
    var future = moment().add(1, 'hour')
    console.log(past)

    var nine = moment('.hour-nine').set("hour", 9);
    var ten = moment('.hour-ten').set("hour", 10);
    var eleven = moment('.hour-eleven').set("hour", 11);
    var twelve = moment('.hour-twelve').set("hour", 12);
    var thirteen = moment('.hour-thirteen').set("hour", 13);
    var fourteen = moment('.hour-fourteen').set("hour", 14);
    var fifteen = moment('.hour-fifteen').set("hour", 15);
    var sixteen = moment('.hour-sixteen').set("hour", 16);
    var seventeen = moment('.hour-seventeen').set("hour", 17);
  }



var textInputValues = ["","","","","","","","",""];

if( localStorage.getItem('task')) {
  textInputValues = JSON.parse( localStorage.getItem('task'));
}

// loop through textInputValues array to fill correct textareas
for(var i = 0; i < textInputValues.length; i++){
  document.getElementById(`${i}`).value = textInputValues[i]
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


pastPresentFuture();
