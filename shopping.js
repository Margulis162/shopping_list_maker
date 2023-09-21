/*_____________________variables & classes___________________*/
let node_list =document.getElementsByTagName("li");


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

