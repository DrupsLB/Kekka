let idPost = new URLSearchParams(window.location.search);
const postId = idPost.get('id');
console.log("sgfgfsd");

const p = document.createElement("p");
const h1 = document.createElement("h1");

let response = async () => {
    let resp = await fetch(`https://gorest.co.in/public/v2/posts/${postId}`);
    resp = await resp.json();
    console.log(resp);
    
    p.textContent = resp.body;
    h1.textContent = resp.title;

    document.body.append(h1, p);
}

response();