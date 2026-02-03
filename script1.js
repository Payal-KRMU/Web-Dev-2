// DOM selection
const form = document.getElementById("eventForm");
const eventsList = document.getElementById("eventsList");
const clearBtn = document.getElementById("clearBtn");
const sampleBtn = document.getElementById("sampleBtn");

// form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const desc = document.getElementById("desc").value;

  // remove empty text if present
  const emptyText = eventsList.querySelector(".empty-text");
  if (emptyText) {
    emptyText.remove();
    eventsList.style.alignItems = "flex-start";
    eventsList.style.justifyContent = "flex-start";
  }

  // event card
  const eventDiv = document.createElement("div");
  eventDiv.className = "event-card";

  // title
  const h3 = document.createElement("h3");
  h3.textContent = title;

  // date
  const dateP = document.createElement("p");
  const dateStrong = document.createElement("strong");
  dateStrong.textContent = "Date: ";
  dateP.append(dateStrong, document.createTextNode(date));

  // category
  const catP = document.createElement("p");
  const catStrong = document.createElement("strong");
  catStrong.textContent = "Category: ";
  catP.append(catStrong, document.createTextNode(category));

  // description
  const descP = document.createElement("p");
  descP.textContent = desc;

  // delete button
  const delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.textContent = "Delete";

  // append all inside card
  eventDiv.append(h3, dateP, catP, descP, delBtn);

  // add card to list
  eventsList.appendChild(eventDiv);

  // reset form
  form.reset();
});

// Event Delegation (delete)
eventsList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();

    // if no events left
    if (eventsList.children.length === 0) {
      const p = document.createElement("p");
      p.className = "empty-text";
      p.textContent = "No events yet. Add your first event!";
      eventsList.appendChild(p);

      eventsList.style.alignItems = "center";
      eventsList.style.justifyContent = "center";
    }
  }
});

// Clear all events
clearBtn.addEventListener("click", function () {
  eventsList.innerHTML = "";

  const p = document.createElement("p");
  p.className = "empty-text";
  p.textContent = "No events yet. Add your first event!";
  eventsList.appendChild(p);

  eventsList.style.alignItems = "center";
  eventsList.style.justifyContent = "center";
});

// Add sample event
sampleBtn.addEventListener("click", function () {
  eventsList.innerHTML = "";
  eventsList.style.alignItems = "flex-start";
  eventsList.style.justifyContent = "flex-start";

  const eventDiv = document.createElement("div");
  eventDiv.className = "event-card";

  const h3 = document.createElement("h3");
  h3.textContent = "Web Dev Workshop";

  const dateP = document.createElement("p");
  const s1 = document.createElement("strong");
  s1.textContent = "Date: ";
  dateP.append(s1, document.createTextNode("12/03/2026"));

  const catP = document.createElement("p");
  const s2 = document.createElement("strong");
  s2.textContent = "Category: ";
  catP.append(s2, document.createTextNode("Workshop"));

  const descP = document.createElement("p");
  descP.textContent = "Hands-on DOM Manipulation Session";

  const delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.textContent = "Delete";

  eventDiv.append(h3, dateP, catP, descP, delBtn);
  eventsList.appendChild(eventDiv);
});
