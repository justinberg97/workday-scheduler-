const timeBlocks = document.querySelectorAll("textarea");

// Create Time of Day Display
var time = moment().format("MMM Do, YYYY, hh:mm:ss");
$("#currentDay").text(time);
// Create Time Block color formatting
function assessTimeBlocks() {
  let startTime = 9;

  const currentHour = moment().hour();
  console.log(currentHour);

  timeBlocks.forEach((timeBlock) => {
    console.log(timeBlock, currentHour, startTime);
    if (currentHour === startTime) {
      timeBlock.classList.add("present");
    }
    if (currentHour < startTime) {
      timeBlock.classList.add("future");
    }
    if (currentHour > startTime) {
      timeBlock.classList.add("past");
    }
    startTime++;
  });
}
// Create local storage functionality 
function saveNote() {
  var siblings = $(this).siblings();
  console.log(siblings)
  var text = siblings[1].value;
  var timeBlockId = siblings[1].getAttribute("id");
  console.log(timeBlockId, text);
  localStorage.setItem(timeBlockId, text);
}
  for (let i = 1; i <= 16; i++){
    // let key = localStorage.timeBlockId(i);
    let value = localStorage.getItem(i);
    $("#" + i).val(value);
  }
  

$(".saveBtn").click(saveNote);

assessTimeBlocks()