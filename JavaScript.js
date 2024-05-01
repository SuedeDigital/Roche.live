// Make the modal draggable
const draggableModal = document.getElementById('modal-music');
let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
if (draggableModal) {
    // When a user clicks and holds the mouse button down on the modal header
    draggableModal.querySelector('.modal-content').onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Get the initial mouse cursor position
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Call the function whenever the cursor moves
        document.onmousemove = elementDrag;
        // Call a function when the user releases the mouse button
        document.onmouseup = closeDragElement;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set the modal's new position
        draggableModal.style.top = (draggableModal.offsetTop - pos2) + "px";
        draggableModal.style.left = (draggableModal.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // Stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
