// 1) Simple synchronous callback
function greet(name, callback) {
    const msg = `Hello, ${name}!`;
    callback(msg);
}

greet('Alice', (message) => {
    console.log(message); // "Hello, Alice!"
});

// 2) Array callback (higher-order)
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

// 3) Error-first async callback pattern (Node-style)
function fetchUser(id, callback) {
    // simulate async I/O
    setTimeout(() => {
        if (typeof id !== 'number') {
            return callback(new Error('id must be a number'));
        }
        callback(null, { id, name: 'User' + id });
    }, 100);
}

fetchUser(1, (err, user) => {
    if (err) return console.error('Fetch error:', err.message);
    console.log('Fetched user:', user);
});

// 4) Callback used to control flow (once)
function once(fn) {
    let called = false;
    return function (...args) {
        if (called) return;
        called = true;
        fn.apply(this, args);
    };
}

const init = once(() => console.log('initialized'));
init(); // prints
init(); // ignored