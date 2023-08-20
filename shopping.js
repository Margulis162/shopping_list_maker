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

const category_list =["vegetables", "dairy", "cosmetics", "meat & fish", "snacks"];
const item_name = document.getElementById("item");
const price = document.getElementById("price");
const datalist = document.getElementById("cat_list");

const catOfItem = document.getElementById("category");

// button for adding items in the list
add_btn = document.getElementById("add_item");

/*___________________________f(x)___________________________*/

// updates the shopping list 
function updateList(){
    list.innerHTML = "";
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

// creates an item object and places it into the list
function create_item(){
    if(item_name.value !==""  && price.value !== "" && catOfItem.value !== ""){
        const item = new Item(item_name.value, price.value, catOfItem.value);
        console.log(item);
        cart.push(item);
        updateList();
    }else{
        alert('input missing')
        console.log(catOfItem.value, item_name.value, price.value );
    }
}
 
/*___________________________flow___________________________*/



cat_data_creation();

add_btn.addEventListener(  "click", create_item);