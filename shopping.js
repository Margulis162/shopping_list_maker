/*_____________________variables & classes___________________*/
let node_list =document.getElementsByTagName("li");

let close_btns = document.getElementsByClassName("close");

const shoping_list = document.querySelector("ul");

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