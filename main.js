canvas = document.getElementById("myCanvas");
color = "green";
width = 4;
radius = 20;
var current_x , current_y, last_x, last_y
var mouseEvent= ""
var can =canvas.getContext("2d")
canvas.addEventListener("mouseup" , MouseUp)
function MouseUp (e) {
mouseEvent = "MouseUp";
console.log(mouseEvent);
}
canvas.addEventListener("mouseleave" , MouseLeave);
function MouseLeave (e) {
    mouseEvent = "MouseLeave";
    console.log(mouseEvent);
}
canvas.addEventListener("mousemove" , MouseMove);
function MouseMove (e) {
    console.log(mouseEvent)
    current_x = e.clientX-canvas.offsetLeft;
    current_y = e.clientY-canvas.offsetTop;
 if(mouseEvent=="mousedown"){
    can.beginPath();
    can.strokeStyle = color;
    can.lineWidth = width;
    can.arc(current_x, current_y, radius ,0, 2 * Math.PI);
    can.stroke();
 }   
 last_x = current_x;
 last_y = current_y;
}
canvas.addEventListener("mousedown",draw);
function  draw(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown"
    console.log(mouseEvent)
}
function erase() {
    can.clearRect(0 , 0 , canvas.width , canvas.height);
} 
