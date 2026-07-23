// Brand Modals- AIM

// Get the modal
var modal = document.getElementById("AIMmodal");

// Get the button that opens the modal
var btn = document.getElementById("AIMbrandbutton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Brand Modals- ABS

// Get the modal
var modal2 = document.getElementById("ABSmodal");

// Get the button that opens the modal
var btn2 = document.getElementById("ABSbrandbutton");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// Accordian JS for Feature Activation Headings
document.querySelectorAll(".featureinstructionsheader").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    // Toggle active appearance
    button.classList.toggle("inactive"); // 0.5.10

    if (button.classList.contains("inactive")) {
      // 0.5.10
      // Expand to its exact natural height
      content.style.maxHeight = "0";
      content.style.paddingTop = "0";
      content.style.paddingBottom = "0";
    } else {
      // Collapse
      

      content.style.maxHeight = content.scrollHeight + "px";
      content.style.paddingTop = 10 + "px";
      content.style.paddingBottom = 10 + "px";
    }
  });
});

