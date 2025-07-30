function fetchData() {

    return new Promise ((resolve, reject) => {
// -------------

        setTimeout(() => {
            let success = false;
            if (success)
            {
                resolve("Data fetched successfully");
            }
            else
            {
                reject ("Error fetched data")
            }
        }, 3000);
    })
}
//  let response = fetchData()
//  console.log(response);

fetchData()
.then((data) => console.log(data))
.catch((error) => console.error(error))


 async function getData() {
 try {
     let response = await fetchData();
      console.log(response);

 } catch (error) {
    console.log(error);
    
 }   
 }
 