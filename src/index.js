import "./css/styles.css";
import getUsers from './js/usersFetch';
import pages from './js/json/pages.js';
import templateRoot from './hbs/root.hbs';
import templateUser from './hbs/user.hbs';


let appEl = document.getElementById("app");
let mainEl;

window.onload = () => {
    appEl.innerHTML = templateRoot(pages);

    document.getElementById("btn-one-user").addEventListener("click", () => {
        getUsers(1, cb);
    });

    document.getElementById("btn-ten-user").addEventListener("click", () => {
        getUsers(10, cb);
    });

    document.getElementById("btn-thousand-user").addEventListener("click", () => {
        alert("Are you crazy?!!! Don't try any more!");
    });


    mainEl = document.getElementById("main");

    let cb = json => {

        // for (let user of json.results) {
        //     user.nat = `<strong>${user.nat}</strong>`;
        // }
        // console.log(json);
        mainEl.innerHTML = templateUser(json);
        // let elsUsersEmail = document.getElementsByClassName("user-email");

        // for (let elsUserEmail of elsUsersEmail) {
        //     elsUserEmail.addEventListener('click', function () {
        //         this.style.backgroundColor = "red";
        //     });
        // }
    };
    getUsers(1, cb); // call getUsers (usersFetch) with (3 and (json)={})
};