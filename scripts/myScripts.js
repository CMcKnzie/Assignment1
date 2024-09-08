var varTime;
var timer = document.getElementById("time");
var countDownSecs;

function startTime(){ 
  varTime = setInterval(start, 1000);
  document.getElementById("timerDisplay").innerHTML = timer.value;
  countDownSecs = timer.value;
} 

function start(){
  countDownSecs--;
  document.getElementById("timerDisplay").innerHTML = countDownSecs;
  if (countDownSecs == -1){
    stop();
    document.getElementById("timerDisplay").innerHTML = "0";
    alert("Timer Done!")
  }
}

function stop(){
  clearInterval(varTime);
}