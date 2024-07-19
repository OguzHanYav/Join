let users = [];

const BASE_URL =
  "https://remotestorage-5be86-default-rtdb.europe-west1.firebasedatabase.app/";
const urlParams = new URLSearchParams(window.location.search);
const msg = urlParams.get("msg");
if (msg) {
  msgBox.innerHTML = msg;
}

async function onloadFunction() {
  let contactResponse = await getAllContacts();
  let addContacts = postContacts("/2");
  console.log(contactResponse);
}

async function getAllContacts(path = "") {
  let response = await fetch(BASE_URL + path + ".json");
  return (responseAsJson = await response.json());
}

async function postContacts(path = "", data = {}) {
  let response = await fetch(BASE_URL + path + ".json", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return (responseAsJson = await response.json());
}
function addContacts() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  users.push({ email: email.value, name: name.value, phone: phone.value });
  window.location.href = "index.hmtl?msg=New Contact Edited";
}

function toggleAddNewContact (){
document.getElementById('addNewContact').classList.toggle('d-none');
}
