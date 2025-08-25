// method 1 for API intigration
const LoadComments = () => {

    const url = 'https://jsonplaceholder.typicode.com/comments'
    fetch(url)
    .then(Response => Response.json() )
    .then(data => console.log(data))
    .catch(error => console.error('error happened', error))
}
// method 2
try {
const LoadComments2 = async() => {
 const res = await fetch('https://jsonplaceholder.typicode.com/comments')
 const data = await res.json();
 console.log(data);

}
} catch (error) {
    console.error('data load error');
    
}