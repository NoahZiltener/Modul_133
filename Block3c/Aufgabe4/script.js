document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit").addEventListener("click", function() {
        const screws = document.getElementById("screw-input").value;
        const nuts = document.getElementById("nut-input").value;
        const grommets = document.getElementById("grommet-input").value;

        console.log(screws);
        console.log(nuts);
        console.log(grommets);

        const price = calculatePrice(screws,nuts,grommets);

        document.getElementById("price").innerText = "⇨ " + Math.round(price * 100) / 100;
    });
});


function calculatePrice(screws, nuts, grommets){
    let price = 0

    price += screws * 0.2;
    price += nuts * 0.1;
    price += grommets * 0.05

    return price
}


