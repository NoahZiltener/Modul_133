let farben = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit").addEventListener("click", function() {
        let input = document.getElementById("color-input");
        let list = document.getElementById("colors-list")
        let value = input.value;
        farben = [...farben, value];
        input.value = "";
        printArray(farben, list)
        console.log(farben);
    });
});

function printArray(array, list){
    list.innerHTML = "";
    array.forEach(element => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        list.appendChild(li);
    });
}
