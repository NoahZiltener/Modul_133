function printFibonacci(){
    console.log("Fibonacci Numbers:")
    var inputnumber = document.getElementById("number").value;
    var a = 1, b = 0, temp;
    while(a < inputnumber){
        console.log(a);
        temp = a;
        a = a + b;
        b = temp;
        
    }
}