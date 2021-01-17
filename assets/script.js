// Display Current Date at top

var currentDate = moment().format('dddd, MMMM Do, YYYY')
$('#currentDay').append( document.createTextNode(currentDate))

// Blocks color coded if they are past present or future

  /* var pastPresentFuture = function () {
    var time = $(".time").text().trim()
    console.log(time); 

    var nine = moment('.hour-nine').set("hour", 9);
    var ten = moment('.hour-ten').set("hour", 10);
    var eleven = moment('.hour-eleven').set("hour", 11);
    var twelve = moment('.hour-twelve').set("hour", 12);
    var thirteen = moment('.hour-thirteen').set("hour", 13);
    var fourteen = moment('.hour-fourteen').set("hour", 14);
    var fifteen = moment('.hour-fifteen').set("hour", 15);
    var sixteen = moment('.hour-sixteen').set("hour", 16);
    var seventeen = moment('.hour-seventeen').set("hour", 17);
  } */

// click into a time block, enter an event and save

var textInputValues = [];

$(".saveBtn").click(function () {
  var textInput = $(this).siblings("textarea").val()
  console.log(textInput)

  textInputValues.push(textInput)
  console.log(textInputValues)

  saveTasks();

});

// save in local storage

var saveTasks = function() {
    localStorage.setItem("task", JSON.stringify(textInputValues));

    loadTasks();
}

// get from local storage

var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));
}

// pastPresentFuture();
