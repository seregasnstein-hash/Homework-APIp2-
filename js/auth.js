const btnLogin = document.querySelector("#btnLogin");
const btnLogout = document.querySelector("#btnLogout");
const usernameHeader = document.querySelector(".header__user-name");
const divUserHeader = document.querySelector(".header__user");

export function checkAuth() {
  let name = localStorage.getItem("name");
  let token = localStorage.getItem("token");

  if (name && token) {
    btnLogin.classList.add("hidden");
    divUserHeader.classList.remove("hidden");
    usernameHeader.textContent = name;

    btnLogout.onclick = () => {
      localStorage.removeItem("name");
      localStorage.removeItem("token");
      window.location.reload();
    };
  } else {
    usernameHeader.textContent = "";
    btnLogin.classList.remove("hidden");
    divUserHeader.classList.add("hidden");
  }
}
