// FOR API
const API_URL = "https://api.goprogram.ai/inspiration";

async function getQuote() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    document.getElementById("quote-message").style.display = "none";
    document.getElementById("quote").innerHTML = `"${data.quote}"`;
    document.getElementById("author").innerHTML = `- ${data.author}`;
  } catch (error) {
    console.error(error);
  }
}

window.onload = function () {
  getQuote();
};
//FOR DIV
// Get all the links and content divs
const links = document.querySelectorAll("nav a");
const contentDivs = document.querySelectorAll('[id^="content"]');

// Show the first content by default
contentDivs[0].style.display = "block";

// Add click event listeners to the links
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Hide all content divs
    contentDivs.forEach((contentDiv) => {
      contentDiv.style.display = "none";
    });

    // Show the selected content div
    const selectedContent = link.dataset.content;
    document.getElementById(selectedContent).style.display = "block";
  });
});

// FOR MY PERSONAL INFO TABLE
function editNumbers() {
  const table = document.querySelector("table");
  const cells = table.querySelectorAll("td");
  const editButton = table.querySelector("button");

  cells.forEach((cell) => {
    if (cell.id === "date") {
      cell.contentEditable = false;
      const input = document.createElement("input");
      input.type = "date";
      input.value = cell.innerText;
      cell.innerText = "";
      cell.appendChild(input);
    } else if (cell.id === "sex") {
      cell.contentEditable = false;
      const select = document.createElement("select");
      const options = ["Male", "Female"];
      options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.innerText = option;
        select.appendChild(optionElement);
      });
      select.value = cell.innerText;
      cell.innerText = "";
      cell.appendChild(select);
    } else if (cell.id === "dept") {
      cell.contentEditable = false;
      const select = document.createElement("select");
      const options = [
        "Electronics: Communications Engineering",
        "Computer Engineering",
        "Civil Engineering",
        "Accountancy",
        "Management",
        "Marketing",
        "Computer Science",
      ];
      options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.innerText = option;
        select.appendChild(optionElement);
      });
      select.value = cell.innerText;
      cell.innerText = "";
      cell.appendChild(select);
    } else if (cell.id === "desig") {
      cell.contentEditable = false;
      const select = document.createElement("select");
      const options = [
        "Part Time",
        "Assistant Professor",
        "Full Time Professor",
        "Department Dean",
        "Administartor",
        "Finance/ Teasurer",
        "Board of Trustees",
      ];
      options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.innerText = option;
        select.appendChild(optionElement);
      });
      select.value = cell.innerText;
      cell.innerText = "";
      cell.appendChild(select);
    } else if (cell.id === "email") {
      cell.contentEditable = false;
      const input = document.createElement("input");
      input.type = "email";
      input.value = cell.innerText;
      cell.innerText = "";
      cell.appendChild(input);
    } else {
      cell.contentEditable = true;
    }
  });

  editButton.innerText = "Save";
  editButton.onclick = saveNumbers;
}

function saveNumbers() {
  const table = document.querySelector("table");
  const cells = table.querySelectorAll("td");
  const editButton = table.querySelector("button");

  cells.forEach((cell) => {
    if (cell.id === "sex") {
      cell.innerText = cell.querySelector("select").value;
    } else if (cell.id === "date") {
      cell.innerText = cell.querySelector("input").value;
    } else if (cell.id === "dept") {
      cell.innerText = cell.querySelector("select").value;
    } else if (cell.id === "desig") {
      cell.innerText = cell.querySelector("select").value;
    } else if (cell.id === "email") {
      cell.innerText = cell.querySelector("input").value;
    } else {
      cell.contentEditable = false;
    }
  });

  editButton.innerText = "Edit";
  editButton.onclick = editNumbers;
}
