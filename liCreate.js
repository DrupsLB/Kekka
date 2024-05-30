export let liCreate = async (titles) => {
    for(let el of titles){
        const id = el.id;

        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = `post.html?id=${id}`;
        link.textContent = el.title;
        li.append(link);
        document.querySelector(".ul").append(li);
    }
}