const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector(".input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName); 
  paintGreetings(userName);
}

function paintGreetings(userName) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `안녕하세요 ${userName}님!`;
}

const storageName = localStorage.getItem(USERNAME_KEY);

if (storageName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreetings(storageName);
}