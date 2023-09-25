/*_____________________variables & classes___________________*/

let node_list =document.getElementsByTagName("li");

let close_btns = document.getElementsByClassName("close");

const shoping_list = document.querySelector("ul");

const new_item = document.getElementById("new_position");



const add_btn = document.getElementById("add");

/*___________________________f(x)___________________________*/

// generates close btns for the positions in the list;
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



shoping_list.addEventListener("click", (e) =>  {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
});

add_btn.addEventListener("click", () => {
    
    
    
    let n_item = document.createElement('li');
    n_item.textContent = new_item.value;
    if(new_item.value !== "") {
        shoping_list.appendChild(n_item);
        new_item.value = "";
    } else{window.alert('some txt must be entered')}
    
    // so the multiple list elements in close_btns appear because the function is being closed every time the add btn presses
    // the question is why is it only working inside the event listener
    close_btn();
})


for(const btn of close_btns){
    btn.addEventListener("click", (e)=>{
        
        let prnt = e.currentTarget.parentElement;
        console.log(prnt);
        prnt.style.display ="none";
    })
}