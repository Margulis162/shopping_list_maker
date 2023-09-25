/*_____________________variables & classes___________________*/

let node_list =document.getElementsByTagName("li");

let close_btns = document.getElementsByClassName("close");

const shoping_list = document.querySelector("ul");

const new_item = document.getElementById("new_position");



const add_btn = document.getElementById("add");

/*___________________________f(x)___________________________*/

function close_btn_fx(){
    for(const btn of close_btns){
        btn.addEventListener("click", (e)=>{
            
            let prnt = e.currentTarget.parentElement;
            console.log(prnt);
            prnt.remove();
        })
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
    // for close btn
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    n_item.textContent = new_item.value;
    if(new_item.value !== "") {
        span.className = "close";
        span.appendChild(txt);
        n_item.appendChild(span);
        shoping_list.appendChild(n_item);
        close_btn_fx();
        new_item.value = "";
     
    } else{window.alert('some txt must be entered')}
    
   

})


