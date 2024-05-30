export let liCreate = async (all) => {
    for (let el of all) {
        let id = el.id;

        let li = document.createElement("li");
        let link = document.createElement('a');
        link.href = `post.html?id=${id}`;
        link.textContent = el.title;
        li.classList.add("li");

        li.append(link);
        document.querySelector(".ul").append(li);
    }
}