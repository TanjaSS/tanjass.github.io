$(document).ready(function() {
    var canvas = $("#myCanvas");
    var context = canvas.get(0).getContext("2d");
 
    // The Face
    context.strokeStyle = '#c4914b';
    context.fillStyle = '#f0db92';
    context.lineWidth = 4;
    context.beginPath();
    context.arc(430,175,120,0*Math.PI,2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();
 
 
    // The Smile
    context.strokeStyle = '#FF0000';
    context.lineWidth = 2;
    context.beginPath();
    context.arc(430,170,75,0.2*Math.PI,0.8*Math.PI);
    context.stroke();
 
    // The Left eye
    context.strokeStyle = '#362104';
    context.fillStyle = '#362104';
    context.beginPath();
    context.arc(385,145,25,0*Math.PI,2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();
 
    // The Right Eye
    context.strokeStyle = '#362104';
    context.fillStyle = '#362104';
    context.beginPath();
    context.arc(475,145,25,0*Math.PI,2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();
 
});