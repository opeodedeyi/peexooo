var calendarBatchOne = document.querySelector('.calendar-one__batch');
var calendarBatchTwo = document.querySelector('.calendar-two__batch');
var controlLeft = document.querySelector('.control_left');
var controlRight = document.querySelector('.control_right');
var controlCenter = document.querySelector('.control_center');


controlLeft.addEventListener('click', function(event) {
    event.preventDefault();
    calendarBatchOne.style.display = 'flex';
    calendarBatchTwo.style.display = 'none';
});


controlRight.addEventListener('click', function(event) {
    event.preventDefault();
    calendarBatchTwo.style.display = 'flex';
    calendarBatchOne.style.display = 'none';
});

controlCenter.addEventListener('click', function(event) {
    event.preventDefault();
});