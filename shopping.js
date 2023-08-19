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

const category_list =["vegitables", "dairy", "cosmetics", "meat & fish", "snacks"];
const datalist = document.getElementById("cat_list");

/*___________________________f(x)___________________________*/

// updates the shopping list 
function updateList(){
    for( i of cart){
        const position = list.appendChild(document.createElement('li'));
        position.textContent = `${i.name}______${i.price}$`;
    }

}

// creates a list of already recorded categories
function cat_data_creation(){

    for(i of category_list){
        const cat = datalist.appendChild(document.createElement('option'));
        
        cat.textContent = `${i}`;
    }
}


 
/*___________________________flow___________________________*/

const apples =  new Item('apples', 4 , "vegie");
apples.addToCart();
const milk  = new Item('milk', 3 , 'dairy');
milk.addToCart();
updateList();

cat_data_creation();

