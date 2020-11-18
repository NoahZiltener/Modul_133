document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit").addEventListener("click", function() {
        let input = document.getElementById("todo-input");
        let text = input.value;
        if(text != ""){
            createElemet(text);
        }
        input.value = "";
    });
    document.getElementById("todo-list").addEventListener("click", function(e) {
        if (e.target && e.target.matches("li.item")) {
          e.target.className += " crossed";
        }
      });
});

function createElemet(text){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(text));
    li.className = 'item';
    document.getElementById('todo-list').appendChild(li);
}

