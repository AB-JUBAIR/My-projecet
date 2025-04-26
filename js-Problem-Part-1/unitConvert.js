// 12 inch 1 feet 

function InchToFeet (inch)
{
    const feet = parseInt (inch/12 ); // parseint key word ti use korle inteferj number return korbe
    const feetReminer = inch % 12;
    let result = feet +'ft '+ feetReminer +'Inch';
    return result;
    
}

const MyHeight = InchToFeet(50);


console.log(MyHeight);
