const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("Name is Reaquired");
  }
  if (password.value.length <= 6) {
    messages.push("Password Must Be Longer Than 6 Characters");
  }
  if (password.value.length >= 20) {
    messages.push("Password Must Be Shorter Than 20 Characters");
  }
  if (password.value === "password") {
    messages.push("Password cannot be password");
  }
  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(",");
  }
});
