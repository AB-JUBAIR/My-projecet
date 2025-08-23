// File: /Users/jubair7624/Library/Mobile Documents/com~apple~CloudDocs/Documents/MY Projecet/advanceJS/aurgoments.js
// Examples showing "call by value" (primitives) and behavior often called "call by reference" for objects.
// Note: JavaScript passes arguments by value. For objects/arrays the value passed is a reference.

// --- Call by value (primitives) ---
function changePrimitive(x) {
    x = x + 1; // only the local copy changes
    console.log('inside changePrimitive:', x);
}

let num = 10;
console.log('before changePrimitive:', num);
changePrimitive(num);
console.log('after changePrimitive:', num);
// Output:
// before changePrimitive: 10
// inside changePrimitive: 11
// after changePrimitive: 10

// --- Objects / Arrays: reference value is passed by value ---
// Mutating the object via the parameter changes the original object.
function mutateObject(obj) {
    obj.name = 'Changed';
    console.log('inside mutateObject:', obj);
}

// Reassigning the parameter to a new object does NOT change the caller's variable.
function reassignObject(obj) {
    obj = { name: 'New Object' };
    console.log('inside reassignObject:', obj);
}

let person = { name: 'Original' };
console.log('\nbefore mutateObject:', person);
mutateObject(person);
console.log('after mutateObject:', person); // person.name has changed

console.log('\nbefore reassignObject:', person);
reassignObject(person);
console.log('after reassignObject:', person); // still the result from mutateObject, reassignment didn't affect caller

// --- Arrays behave the same as objects ---
function pushItem(arr) {
    arr.push('x'); // mutates the original array
}

function replaceArray(arr) {
    arr = ['new']; // reassigns local parameter only
    console.log('inside replaceArray:', arr);
}

let list = [1, 2];
console.log('\nbefore pushItem:', list);
pushItem(list);
console.log('after pushItem:', list);

console.log('\nbefore replaceArray:', list);
replaceArray(list);
console.log('after replaceArray:', list);

// Summary (in comments):
// - Primitives (number, string, boolean, null, undefined, symbol, bigint): passed by value; function gets a copy.
// - Objects/arrays/functions: the reference to the object is passed by value. Mutating via that reference affects the original object; reassigning the parameter does not.