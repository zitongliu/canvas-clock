var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.strokeStyle = '#76EE00';
ctx.lineWidth = 17;
ctx.lineCap = 'round';
ctx.shadowBlur = '15';
ctx.shadowColor = '#76EE00';

console.log("Hello World");

function degToRad (degree){
  var factor = Math.PI / 180;
  return degree * factor;
}

function renderTime(){

  // using built in javascript date object
  var now = new Date();
  var today = now.toDateString();
  var time = now.toLocaleTimeString();
  var hours = now.getHours();
  if (hours > 12 ){
    hours -= 12;
  }
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var milliseconds = now.getMilliseconds();
  var betterSeconds = seconds + (milliseconds/1000);

  // Background
  var gradient = ctx.createRadialGradient(250,250,5,250,250,300);
  gradient.addColorStop(0,'#395D33');
  gradient.addColorStop(1, 'black');
  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,500,500);

  // hours
  // we want to center of the circle to be 250 px from left, 250 px from top, 200 radius. Start at 270 degrees (top) in radians.
  ctx.beginPath();
  ctx.arc(250,250,200, degToRad(270), degToRad( (hours*30) - 90) );
  ctx.stroke();
  console.log(hours);

  // Minutes
  ctx.beginPath();
  ctx.arc(250,250,170, degToRad(270), degToRad( (minutes*6) - 90) );
  ctx.stroke();
  console.log(minutes);


  // Seconds
  ctx.beginPath();
  ctx.arc(250,250,140, degToRad(270), degToRad( (betterSeconds*6) - 90) );
  ctx.stroke();
  console.log(seconds);

  // date
  ctx.font = '25px Arial bold';
  ctx.fillStyle = '#76EE00';
  ctx.fillText(today, 175,250);

  // Time
  ctx.font = '18px Arial bold';
  ctx.fillStyle = '#76EE00';
  ctx.fillText(time, 175,280);

  var dataURL = c.toDataURL();
  document.getElementById('clock').src = dataURL;




}





window.setInterval(renderTime, 100);
