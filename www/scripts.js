"use strict";

window.addEventListener("load", initialize, false);
window.addEventListener("touchstart", touchStart, false);
window.addEventListener("touchmove", touchMove, false);
window.addEventListener("touchend", touchEnd, false);

var SCREEN_WIDTH, SCREEN_HEIGHT;
var canvas, context;

var touched = false;

function initialize()
{
	SCREEN_WIDTH = window.innerWidth;
	SCREEN_HEIGHT = window.innerHeight;
	
	canvas = document.getElementById("canvas");
	
	canvas.width = SCREEN_WIDTH;
	canvas.height = SCREEN_HEIGHT;
	
	context = canvas.getContext("2d");
}

function touchStart(e)
{
	touched = true;
	
	var touch = e.touches[0];
	
	//alert(touch.clientX + " : " + touch.clientY);
	
	drawCircles(touch.clientX, touch.clientY);
	
	//start(e);
}

function touchMove(e)
{
	e.preventDefault();
	var touch = e.touches[0];
	
	drawCircles(touch.clientX, touch.clientY);
	
	//alert("move");
}

function touchEnd(e)
{
	console.log("stop");
}

/*
function start(e)
{
	while(touched)
	{
	
	}
}
*/

function drawCircles(x, y)
{
	context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
	
	context.beginPath();
	context.strokeStyle = "#ff0000";
	context.arc(x, y, 10, 0, 2 * Math.PI);
	context.stroke();
	context.closePath();
	
	context.beginPath();
	context.strokeStyle = "#ffff00";
	context.arc(SCREEN_WIDTH - x, y, 10, 0, 2 * Math.PI);
	context.stroke();
	context.closePath();
	
	context.beginPath();
	context.strokeStyle = "#00ff00";
	context.arc(x, SCREEN_HEIGHT - y, 10, 0, 2 * Math.PI);
	context.stroke();
	context.closePath();
	
	context.beginPath();
	context.strokeStyle = "#0000ff";
	context.arc(SCREEN_WIDTH - x, SCREEN_HEIGHT - y, 10, 0, 2 * Math.PI);
	context.stroke();
	context.closePath();
}