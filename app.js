let colour=["green", "blue", "black", "white", "purple", "yellow","red","orange","brown","pink"];
let id_haru=[];
let back_id_color=[];
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}
for(let i=1; i<=32; i++){
    const open="b";
    let idinlist=open.concat(i.toString());
    let value4 = generateRandomInteger(9);
    
    var backcolor=document.getElementById(idinlist);
    backcolor.style.backgroundColor=colour[value4];
    // id_haru.push(idinlist);
}



function flip(given_id){
    
    let x="#";
    let id=x.concat(given_id);
    document.querySelector(id).classList.add("cardflip");
    let y="b";
    let num_only=given_id.slice(1, given_id.length);
    let back_id=y.concat(num_only);
    let rang=window.getComputedStyle( document.getElementById(back_id) ,null).getPropertyValue('background-color');
    back_id_color.push(rang);
    id_haru.push(id);
    
    setTimeout(function(){
        if(id_haru.length==2){

            if(back_id_color[0]!=back_id_color[1]){
            document.querySelector(id_haru[0]).classList.remove("cardflip");
            document.querySelector(id_haru[1]).classList.remove("cardflip");
        }
       
    while(id_haru.length > 0) {
        id_haru.pop();
        back_id_color.pop();
    }

    
}


    }, 1050); 
    
}




