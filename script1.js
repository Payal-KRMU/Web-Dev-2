 const form = document.getElementById("eventForm");
  const eventsList = document.getElementById("eventsList");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const desc = document.getElementById("desc").value;

    // remove default text
    if (eventsList.children.length === 1 && eventsList.children[0].tagName === "P") {
      eventsList.innerHTML = "";
    }

    const eventDiv = document.createElement("div");
    eventDiv.className = "event-card";

    eventDiv.innerHTML = `
      <h3>${title}</h3>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Category:</strong> ${category}</p>
      <p>${desc}</p>
      <button class="delete-btn">Delete</button>
    `;

    eventsList.appendChild(eventDiv);
    form.reset();
  });

  // Event Delegation
  eventsList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
      e.target.parentElement.remove();
    }
  });

  // DOM text demo
  const textDemo = document.getElementById("textDemo");

  function showInnerText() {
    textDemo.innerText = "This is innerText (ignores HTML tags)";
  }

  function showInnerHTML() {
    textDemo.innerHTML = "<b>This is innerHTML</b> with <i>HTML tags</i>";
  }

  function showTextContent() {
    textDemo.textContent = "This is textContent (shows everything as text)";
  }