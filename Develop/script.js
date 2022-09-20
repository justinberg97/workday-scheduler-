const timeBlocks = document.querySelectorAll("textarea")


// Create Time of Day Display 
var time = moment().format("MMM Do, YYYY, hh:mm:ss");
$("#currentDay").text(time);


function assessTimeBlocks() {
    let startTime = 9

const currentHour = moment().hour();
console.log(currentHour)

timeBlocks.forEach(timeBlock => {
    console.log(timeBlock, currentHour, startTime)
    if (currentHour === startTime) {timeBlock.classList.add('present')}
    if (currentHour < startTime) {timeBlock.classList.add('future')}
    if (currentHour > startTime) {timeBlock.classList.add('past')}
    startTime ++
}) 
}
function saveNote() {

}
$(".saveBtn").click(saveNote);

assessTimeBlocks()

