function BMI_calculator (weight, height)
{

    const BMI = weight / ((height*0.01)*(height*0.01)); // BMI = weight (kg)/(height[m]^2)
    if (BMI < 18.5) {
        console.log('you are underweight', BMI.toFixed(2));
    }
    else if (BMI >= 18.5 && BMI < 24.9) {
        console.log(' you are normal weight', BMI.toFixed(2));
        
    } else if (BMI >= 25 && BMI <= 29.9) {
        console.log('you are overweigh', BMI.toFixed(2));
        
    }
    else{
        console.log( ' you are obese.',BMI.toFixed(2));
        
    }
}

BMI_calculator(65, 180);