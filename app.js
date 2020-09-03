const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;

ctx.lineWidth = 5;
ctx.strokeStyle = "#2c2c2c";

let painting = false;

function stopPainting() {
	painting = false;
}
function startPainting() {
	painting = true;
}


function canvasMonitoring(event) {
	const x = event.offsetX;
	const y = event.offsetY;
	if (!painting) {
		ctx.beginPath();
		ctx.moveTo(x, y);
	} else {
		ctx.lineTo(x, y);
		ctx.stroke();
	}

}

const handleColorClick = (event) => ctx.strokeStyle = event.target.style.backgroundColor;


function init() {
	canvas.addEventListener("mousemove", canvasMonitoring);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPainting);
	canvas.addEventListener("mouseleave", stopPainting);
}


if (canvas) {
	init();
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));
