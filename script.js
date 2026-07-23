// Modal JS

const boxes = document.querySelectorAll(".brandbutton");
const closeButtons = document.querySelectorAll(".close");

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    const modalId = box.getAttribute("data-modal");
    const modal = document.getElementById(modalId);

    modal.style.display = "block";
  });
});

closeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.closest(".modal").style.display = "none";
  });
});




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

