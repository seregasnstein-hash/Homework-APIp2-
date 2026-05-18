import { getMovies } from "./movies.js";
import { checkAuth } from "./auth.js";
getMovies();
checkAuth();

const btnEnter = document.getElementById('btnLogin');
btnEnter.onclick = () => {
    window.location.href = "login.html";
}