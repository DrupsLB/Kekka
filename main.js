import { liCreate } from "./liCreate.js";
let startFunction = async () => {
    const arr = await fetch("https://gorest.co.in/public/v2/posts");
    let titles = await arr.json();
    await liCreate(titles);
}

startFunction();