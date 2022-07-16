canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color=document.getElementById("colorinput").value;
    console.log(color);
    mouse_x=e.ClientX-canvas.offsetLeft;
    mouse_y=e.ClientY-canvas.offsetTop;
    console.log(mouse_x , mouse_y);
    circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
}

function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}