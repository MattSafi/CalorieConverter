let isKilojoules = true;

function convertToCalories() {
  let inputValue = document.getElementById("kjInput").value;
  if (inputValue === "") {
    document.getElementById("calOutput").innerHTML = "0";
    return;
  }

  let result;
  let inputType;

  if (isKilojoules) {
    let cal = inputValue * 0.239006;
    result = cal.toFixed(2) + " Calories";
    inputType = "Kilojoules";
  } else {
    let kj = inputValue / 0.239006;
    result = kj.toFixed(2) + " Kilojoules";
    inputType = "Calories";
  }

  document.getElementById("calOutput").innerHTML = result;

  // Save the conversion to localStorage
  saveConversion(inputValue, result, inputType);
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

function saveConversion(inputValue, result, inputType) {
  // Create an object for the conversion
  let conversion = {
    input: inputValue,
    output: result,
    inputType: inputType,
    timestamp: new Date().toLocaleString(),
  };

  // Get existing conversions from localStorage
  let conversions = JSON.parse(localStorage.getItem("conversions")) || [];
  conversions.push(conversion);
  localStorage.setItem("conversions", JSON.stringify(conversions));
  displayConversions();
}

// Display recent conversions from localStorage
function displayConversions() {
  let conversions = JSON.parse(localStorage.getItem("conversions")) || [];
  let storageList = document.getElementById("storage-list");

  // Clear the current list
  storageList.innerHTML = "";

  // Display each conversion
  conversions.forEach((conversion) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${conversion.input} ${conversion.inputType} → ${conversion.output}`;
    storageList.appendChild(listItem);
  });
}

function clearStorage() {
  localStorage.removeItem("conversions");
  displayConversions();
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

// Load recent conversions when the page loads
window.onload = function () {
  displayConversions();
};
