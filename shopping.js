/*_____________________variables & classes___________________*/
let node_list =document.getElementsByTagName("li");

let close_btns = document.getElementsByClassName("close");

const shoping_list = document.querySelector("ul");

const new_item = document.getElementById("new_position");



const add_btn = document.getElementById("add");

/*___________________________f(x)___________________________*/
function close_btn(){
    for(const node of node_list){
        let span = document.createElement("span");

        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        node.appendChild(span);
    }
}
 

 
/*___________________________flow___________________________*/

close_btn();

for(const btn of close_btns){
    btn.addEventListener("click", (e)=>{
        let prnt = e.currentTarget.parentElement;
        console.log(prnt);
        prnt.style.display ="none";
    })
}

shoping_list.addEventListener("click", (e) =>  {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
}
});

add_btn.addEventListener("click", () => {
    
    
   
    let n_item = document.createElement('li');
     n_item.textContent = new_item.value;
    if(new_item.value !== "") {
    shoping_list.appendChild(n_item)
   } else{window.alert('some txt must be entered')}
    
})