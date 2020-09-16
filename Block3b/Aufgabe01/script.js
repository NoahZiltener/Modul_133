function varTest() {
    var x = 31;
    if(true){
        var x = 71;
        console.log(x);
    }
    console.log(x);
}
varTest();

function letTest() {
    let x = 31;
    if(true){
        let x = 71;
        console.log(x);
    }
    console.log(x);
}
letTest();

function constTest() {
    const x = 31;
    if(true){
        const x = 71;
        console.log(x);
    }
    console.log(x);
}
constTest();