
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const username = document.querySelector(".username");
const btn = document.querySelector('.btn');
const error = document.querySelector(".error");

window.addEventListener("load" , () => {
  if(!localStorage.getItem("users")) {
    localStorage.setItem("users" , JSON.stringify([]))
  }
});

const users = JSON.parse(localStorage.getItem("users"));

btn.addEventListener("click" , e => {
  e.preventDefault();

  const isUser = users.find(item => item.email === email.value);

  if(email.value !=="" && password.value !=="" && username.value !=="") {
    if(isUser) {
      error.innerHTML = "Такой пользователь уже усть!"
    } else {
      const allUser = JSON.parse(localStorage.getItem("users"))
      
      localStorage.setItem("users" , JSON.stringify(
        [
          ...allUser,
          {
            email: email.value,
            password: password.value,
            username: username.value
          }
        ]
      ))
      window.open("../auth.html" , "_self");
    }
    email.value ="";
    password.value ="";
    username.value ="";
  } else {
    error.innerHTML = 'Все поля должны быть заполнены!'
  }
})

window.addEventListener("load" , () => {
  if(localStorage.getItem("isAuth") === "true") {
    window.open("../index.html" , "_self")
  }
})