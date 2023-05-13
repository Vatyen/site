var body = document.getElementById("body");

function togglemenu(){
    var menu = document.getElementById("rect01");

    if(menu.className == "rect01-o"){
        menu.className = "rect01-c";
        return;
    }
    if(menu.className == "rect01-c"){
        menu.className = "rect01-o";
        return;
    }
}

function mo_over(x){
    if(x.className == "rect-n"){
        x.className = "rect-s";
    }
}
function mo_out(x){
    if(x.className == "rect-s"){
        x.className = "rect-n";
    }
}
function mo_mvscr(x){
    window.scrollTo({top: x * window.outerWidth,left: 0,behavior: "smooth"});
}

function changetheme(){
    if(body.className == "d"){
        body.className = "l";
    }else if(body.className == "l"){
        body.className = "d";
    }
}

const objs = [];
const objsTxt = [];

addObj("Alysson Caua de Oliveira Thoaldo e muito foda", "imgs/menu-button.png", 12)
addObj("teste2", "imgs/menu-button.png", 12)
addObj("Video", "imgs/sakura-leaves.gif", 12)

function addObj(txtcontent, adress, jmp){
    const newObj = document.createElement("img");
    const newObjTxt = document.createElement("h1");

    newObj.className = "i02-projs";
    newObj.src = adress;
    newObjTxt.className = "i02-projs-txt";
	
	cnt = txtcontent;
	
	if(cnt.length > 9){
		newObjTxt.style.fontSize = "1.35vw";
	}

    newObjTxt.appendChild(document.createTextNode(cnt));

    const curT = document.getElementById("rect01");
    document.body.insertBefore(newObj, curT);
    document.body.insertBefore(newObjTxt, curT);
	
	objs.push(newObj);
	objsTxt.push(newObjTxt);
}

update();

var scrll = 1;

function scrollObjs(side){
	if(side > 0){
		scrll += 12;
	}else{
		scrll -= 12;
	}
}

function update(){
	var xp = 12;
	for(let i = 0; i < objs.length; i++){
		objs[i].style.left = xp + "vw";
		objsTxt[i].style.left = xp + "vw";
		
		xp+=12;
	}
}