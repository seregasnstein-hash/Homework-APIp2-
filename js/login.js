const formAvtorization = document.querySelector(".form__avtorization");

formAvtorization.onsubmit = (e) => {
  e.preventDefault();

  const name = formAvtorization.elements.name.value;
  const email = formAvtorization.elements.email.value;
  const password = formAvtorization.elements.password.value;

  const xhr = new XMLHttpRequest();

  xhr.open("POST", "https://reqres.in/api/login");

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("x-api-key", "free_user_3DZgVgZZJntYyyY2Ozs8X1VnRQd");

  xhr.onload = function () {
    if (xhr.status !== 200) {
      alert(`Ошибка сервера: ${xhr.status}`);
      return;
    }

    const data = JSON.parse(xhr.responseText);

    if (!data.token) {
      alert("Ошибка авторизации");
      return;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("name", name);

    window.location.href = "index.html";
  };

  xhr.onerror = function () {
    alert("Ошибка сети");
  };

  const body = {
    email: email,
    password: password,
  };

  xhr.send(JSON.stringify(body));
};