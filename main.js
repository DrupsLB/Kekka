import { liCreate } from "./liCreate.js";
let startFunction = async (id) => {
    const arr = await fetch(`https://gorest.co.in/public/v2/posts?page=${id}`);
    let titles = await arr.json();
    await liCreate(titles);
}

startFunction(10);