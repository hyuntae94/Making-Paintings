const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const CANVAS_SIZE = 700;
const INITIAL_COLOR = "#2c2c2c";
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.lineWidth = 5;
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;

let painting = false;
let filling = false;

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

const handleRange = (event) => {
	const size = event.target.value;
	ctx.lineWidth = size;
}
const handleModeClick = () => {
	if (filling === true) {
		mode.innerText = "Fill";
		filling = false;
	} else {
		filling = true;
		mode.innerText = "Paint";
	}
}
const handleColorClick = (event) => {
	ctx.strokeStyle = event.target.style.backgroundColor;
	ctx.fillStyle = event.target.style.backgroundColor;
}

const handleCanvasClick = () => {
	if (filling) {
		ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
	}
}

function init() {
	canvas.addEventListener("mousemove", canvasMonitoring);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPainting);
	canvas.addEventListener("mouseleave", stopPainting);
	canvas.addEventListener("click", handleCanvasClick);
}


if (canvas) {
	init();
}

if (range) {
	range.addEventListener("input", handleRange);
}

if (mode) {
	mode.addEventListener("click", handleModeClick);
}
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));
