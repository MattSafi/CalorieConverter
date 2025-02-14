let isKilojoules = true;

function convertToCalories() {
  let inputValue = document.getElementById("kjInput").value;
  if (inputValue === "") {
    document.getElementById("calOutput").innerHTML = "0";
    return;
  }

  if (isKilojoules) {
    let cal = inputValue * 0.239006;
    let calRounded = cal.toFixed(2);
    document.getElementById("calOutput").innerHTML = calRounded + " Calories";
  } else {
    let kj = inputValue / 0.239006;
    let kjRounded = kj.toFixed(2);
    document.getElementById("calOutput").innerHTML = kjRounded + " Kilojoules";
  }
}

function swap() {
  let inputField = document.getElementById("kjInput");
  let label = document.getElementById("title-text");

  if (isKilojoules) {
    label.innerHTML = "Calories to Kilojoules";
    inputField.placeholder = "Enter Calories...";
    isKilojoules = false;
  } else {
    label.innerHTML = "Kilojoules to Calories";
    inputField.placeholder = "Enter Kilojoules...";
    isKilojoules = true;
  }

  inputField.value = "";
  document.getElementById("calOutput").innerHTML = "0";
}

// Modal functionality
function openModal() {
  document.getElementById("modal").style.display = "flex"; // Show modal
}

function closeModal() {
  document.getElementById("modal").style.display = "none"; // Hide modal
}

// Close modal when clicking outside the modal content
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};
