import { liCreate } from "./liCreate.js";
import { funDiv } from "./navigation.js";

let id = 1

let btnBack = document.createElement("button");
btnBack.classList.add("btnBack");
btnBack.textContent = "Назад";

let btnGo = document.createElement("button");
btnGo.classList.add("btnGo");
btnGo.textContent = "Вперёд";

document.body.append(btnBack, btnGo);

let publicView = async (id) => {
    let allBlogs = await fetch(`https://gorest.co.in/public/v2/posts?page=${id}`)
    let all = await allBlogs.json();
    liCreate(all);
}

publicView(id);
funDiv(id);

document.querySelector(".btnGo").addEventListener("click", async function () {
    let lengLi = document.querySelectorAll("li").length;
    for (let i = 0; i < lengLi; i++) document.querySelector("li").remove();
    document.querySelector("h2").remove();

    id = id + 1;
    publicView(id);
    funDiv(id);
})
document.querySelector(".btnBack").addEventListener("click", async function () {
    if (id == 1) alert("Уже первая страница");
    else {
        id = id - 1;
        let lengLi = document.querySelectorAll("li").length;

        for (let i = 0; i < lengLi; i++) document.querySelector("li").remove();
        document.querySelector("h2").remove();
        
        publicView(id);
        funDiv(id);
    }
})
