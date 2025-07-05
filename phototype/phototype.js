let computer = {cpu: 12,
    ram: 14
};
let lenevo = { screan : "hd",
    __proto__: computer,
};
let JRhardware = { };

// console.log(`computer `, lenevo.__proto__);

let generiCar = {tyer : 4 };

let tesla = {driver: "AI", };

Object.setPrototypeOf(tesla, generiCar);

console.log(`tesla `, generiCar);
console.log(`tesla `, Object.getPrototypeOf(tesla));

