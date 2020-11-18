document.getElementById("sendbutton").addEventListener("click", function() {
    let number = document.getElementById("postnumber").value;
    let url = `https://jsonplaceholder.typicode.com/posts/${number}`
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        document.getElementById("name").innerText = json.title;
        document.getElementById("body").innerText = json.body;
    })
});