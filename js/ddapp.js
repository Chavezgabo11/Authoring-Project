	// put variables (connections to the web page / DOM) at the top
	// constant -> something that will never change / can't be redefined
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropZoneContainer = document.querySelector(".puzzle-board"),
				dragImages = document.querySelectorAll(".puzzle-image"),
				dropZones = document.querySelectorAll(".drop-zone");

	// functions go in the middle
function startDrag() {
	console.log('dragging started' + this.dataset.piecenum);
}

function draggedOver(event) {
	event.preventDefault();
	console.log('dragging over drop zone elements')
}

function dropped(event) {
	event.preventDefault();
	console.log('dropped on the element');
	console.log(event.target.id);
}

	// event handling at the bottom
dragImages.forEach(piece => {
piece.addEventListener('dragstart',startDrag,false);
})

dropZones.forEach(zone => {
	zone.addEventListener('drop', dropped, false);
	zone.addEventListener('dragover', draggedOver, false);
});
