function add(a, b) {
    const total = a+b;
    console.log(a, b);
    return
    
}
function exampleScope() {
    let x = 10;
    if (true) {
        let y = 20;
        console.log('Inside block:', x, y); // x and y are accessible here
    }
    console.log('Outside block:', x); // Only x is accessible here
    // console.log(y); // Error: y is not defined
}

exampleScope();
