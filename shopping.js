/*_____________________variables & classes___________________*/
let cart =[];


class Item {
    name = "";
    price = 1;
    category = "";
    constractor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
    }
    addToCart(){
      cart.push(this);
    }
}

/*___________________________f(x)___________________________*/

const apples = new Item('apples', 5 , "vegitables");

