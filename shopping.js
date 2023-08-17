/*_____________________variables & classes___________________*/
const list = document.getElementById("list");

let cart =[];


class Item {
    name = "";
    price = 1;
    category = "";
    constructor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
    }
    addToCart(){
      cart.push(this);
    }
}

/*___________________________f(x)___________________________*/

function updateList(){
    for( i of cart){
        const position = list.appendChild(document.createElement('li'));
        position.textContent = `${i.name}______${i.price}$`;
    }

}

 
/*___________________________flow___________________________*/

const apples =  new Item('apples', 4 , "vegie");
apples.addToCart();
const milk  = new Item('milk', 3 , 'dairy');
milk.addToCart();
updateList();

