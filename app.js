const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
	painting = false;
}

function canvasMonitoring(event) {
	const x = event.offsetX;
	const y = event.offsetY;
}

function onCanvasDrawing(event) {
	painting = true;
}

function offCanvasDrawing(event) {
	stopPainting();
}

function init() {
	canvas.addEventListener("mousemove", canvasMonitoring);
	canvas.addEventListener("mousedown", onCanvasDrawing);
	canvas.addEventListener("mouseup", offCanvasDrawing);
	canvas.addEventListener("mouseleave", stopPainting);
}


if (canvas) {
	init();
}
