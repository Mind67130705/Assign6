let data = [];

function addarray() {
    let inputtext = prompt("Add text:");
    if (inputtext !== null && inputtext.trim() !== "") {
        data.push(inputtext);
        showlist();
    }
}

function showlist() {
    let list = document.getElementById("listarray");
    list.innerHTML = "";
    data.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function sortatoz() {
    data.sort();
    showlist();
}

function Delete1by1() {
    data.pop();
    showlist();
}

function clearall() {
    data = [];
    showlist();
}
