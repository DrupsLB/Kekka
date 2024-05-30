let idPost = new URLSearchParams(window.location.search);
const postId = idPost.get('id');

const p = document.createElement("p");
const h1 = document.createElement("h1");
const ul = document.createElement("ul");

let response = async () => {
    let resp = await fetch(`https://gorest.co.in/public/v2/posts/${postId}`);

    resp = await resp.json();
    p.textContent = resp.body;
    h1.textContent = resp.title;

    document.body.append(h1, p, ul);
}

response();