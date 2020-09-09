for (var size = 10; size <= 36; size++){
    var text = `<p id="${size}">Schrift mit ${size} Pixel Grösse</p>`;
    document.write(text);
    document.getElementById(size).style.fontSize = size + "px";
}