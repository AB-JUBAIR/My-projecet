class vehicle {
    constructor (name, price ){
        this.name = name;
        this.price = price;
    }
    move (){
        console.log('gari coel na ');
        
    }
}

class bus extends vehicle{

    constructor(name, price, seat){
        super(name, price)
        this.seat = seat;
    }
}
const seatBook = new bus('green line ', '1200', 'A1')
console.log(seatBook);
