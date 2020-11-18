let post = {};

document.getElementById("sendbutton").addEventListener("click", async function () {
    let number = document.getElementById("postnumber").value;
    let url = `https://jsonplaceholder.typicode.com/posts/${number}`
    let response = await fetch(url)
    let json = await response.json();
    post = json
    console.log(post)
    document.getElementById("name").innerText = post.title;
    document.getElementById("body").value = post.body;
});

document.getElementById("updatebutton").addEventListener("click", async function () {
    let body = document.getElementById("body").value;
    post.body = body
    let url = `https://jsonplaceholder.typicode.com/posts/${post.id}`
    let response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let json = await response.json();
    post = json
    console.log(post)
    document.getElementById("name").innerText = post.title;
    document.getElementById("body").value = post.body;
});