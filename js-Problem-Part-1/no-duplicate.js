/**+
 * 
 * array has some duplicate element remove form the array 
 * 
 */

const arra = ['abul',  'kabul', 'abul', 'babul', 'babul'];

function noduplicate (arrays)
{  const uniqickarray = [];
    for (const item of arrays) {
      
        if (uniqickarray.includes(item)=== false) 
            {
            uniqickarray.push(item);
        }
        
    }
    return uniqickarray;
}
const uniqick = noduplicate(arra);
console.log(uniqick);
