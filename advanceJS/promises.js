function fetchData() {

    return new Promise ((resolve, reject) => {
// -------------

        setTimeout(() => {
            let sucess = true;
            if (sucess)
            {
                resolve("Data fecthed successfully");
            }
            else
            {
                reject ("Error fecthed data")
            }
        }, 3000);
    })
}
 let response = fetchData()
 console.log(response);
 