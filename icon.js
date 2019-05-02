
// Modal content
var modal = document.getElementById("resumeModal");

// Get the button that opens the modal
var btn = document.getElementById("resumeBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// When the user clicks the close button,
// remove the modal and disable the sumbit button
$("#close").on("click", function () {
    modal.style.display = "none";
})