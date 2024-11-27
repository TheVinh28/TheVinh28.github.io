let countdown;
let timeLeft = 120;
function startTimer() {
clearInterval(countdown);
countdown = setInterval(() => {
if (timeLeft > 0) {
timeLeft--;
let minutes = Math.floor(timeLeft / 60);
let seconds = timeLeft % 60;
document.getElementById("timer").innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
} else {
clearInterval(countdown);
setTimeout(() => alert("Đã hết giờ"), 3000); 
}
}, 1000);
}




