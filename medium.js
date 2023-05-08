// MEDIUM
var sharePizza = (num) => {
    let slices =  8 / num ;
    let numOfSlices = slices.toFixed(2);
    let message = `Each person gets ${numOfSlices} slices of pizza`;
    return message;
}; 

console.log(sharePizza(5));
