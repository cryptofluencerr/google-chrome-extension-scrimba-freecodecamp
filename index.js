let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

renderLeads = () => {
  listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    //both the codes (in line 8 & line 10, 11, 12 does the same thing)
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);
    listItems += `
    <li>
        <a href="${myLeads[i]}" target="blank">
        ${myLeads[i]}
        </a>
    </li>
    `;
  }
  console.log(listItems);
  ulEl.innerHTML = listItems;
};
