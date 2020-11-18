let post = {};

document.getElementById("sendbutton").addEventListener("click", function () {
    let number = document.getElementById("postnumber").value;
    let url = `https://jsonplaceholder.typicode.com/posts/${number}`
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            post = json
            console.log(post)
            document.getElementById("name").innerText = post.title;
            document.getElementById("body").value = post.body;
        })
});

document.getElementById("updatebutton").addEventListener("click", function () {
    let body = document.getElementById("body").value;
    post.body = body
    let url = `https://jsonplaceholder.typicode.com/posts/${post.id}`
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            post = json
            console.log(post)
            document.getElementById("name").innerText = post.title;
            document.getElementById("body").value = post.body;
        })
});