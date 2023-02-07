const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const roomForm = document.querySelector(".room-form");
const search = document.querySelector(".search-input");

burger.addEventListener("click", () => {
  nav.classList.toggle("pre-hide");
});

const fakeRoomDetails = () => {
  //target the table body
  let tableBody = document.querySelector(".table-body");

  //clear tableBody elements
  tableBody.innerHTML = "";

  let resultCount = randomNumber(1, 6);

  for (let index = 1; index <= resultCount; index++) {
    //create row
    let row = document.createElement("tr");

    //create table data
    let idColumn = document.createElement("td");
    let roomColumn = document.createElement("td");
    let floorColumn = document.createElement("td");
    let accountColumn = document.createElement("td");
    let statusColumn = document.createElement("td");
    let checkinColumn = document.createElement("td");
    let checkoutColumn = document.createElement("td");
    let actionColumn = document.createElement("td");

    //create action buttons
    let actionGreenBtn = document.createElement("button");
    let actionRedBtn = document.createElement("button");

    //update class for action buttons
    actionGreenBtn.classList.add("action-green");
    actionRedBtn.classList.add("action-red");

    //update text
    actionGreenBtn.innerHTML = "Check In";
    actionRedBtn.innerHTML = "Check Out";

    //update action column classlist
    actionColumn.classList.add("room-action");

    idColumn.innerHTML = randomNumber(1, 1000);
    roomColumn.innerHTML = index;
    floorColumn.innerHTML = randomNumber(1, 3);

    let occupied = randomNumber(0, 2);

    statusColumn.innerHTML = occupied ? "Occupied" : "Available";
    accountColumn.innerHTML = "John Doey";

    //temp date;
    let now = getDateNow().date();
    let tom = getDateAdvance(
      0,
      randomNumber(getDateNow().day + 1, getDateNow().day + 2)
    ).date();

    //appen the actions buttons in action column
    // if (occupied) {
      actionColumn.appendChild(actionRedBtn);
      checkinColumn.innerHTML = now;
      checkoutColumn.innerHTML = tom;
    // } else {
    //   actionColumn.appendChild(actionGreenBtn);
    //   checkinColumn.innerHTML = "-";
    //   checkoutColumn.innerHTML = "-";
    // }

    //all all columns in row
    row.append(idColumn);
    row.append(roomColumn);
    row.append(floorColumn);
    row.append(accountColumn);
    // row.append(statusColumn);
    row.append(checkinColumn);
    row.append(checkoutColumn);
    // row.append(actionColumn);

    //add the row in table body
    tableBody.appendChild(row);
  }
  search.value = "";
};

roomForm.addEventListener("submit", (event) => {
  event.preventDefault();

  //event to show loading
  autoLoading(fakeRoomDetails);
});

//loads when wepage load
window.addEventListener("load", fakeRoomDetails);
