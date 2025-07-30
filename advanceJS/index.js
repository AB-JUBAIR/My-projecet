const func = async () =>{
    try {
        console.log("helllo")
        const x = true;
        
if(x) {
    throw new Error("eta true holel run hobe")
}
console.log("dsfds");

    } catch (error) {
        console.log("catch blocvk therke", error)
    }
}

func() 