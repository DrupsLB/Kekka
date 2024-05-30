export let funDiv = async (id) => {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.textContent = id;
    div.append(h2);
    document.body.append(div);

}
