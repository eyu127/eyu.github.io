window.onload=function(){

setTimeout(()=>{

document.querySelector(".loader")
.style.display="none";


},3500);


}
function celebrate(){


// Light candle

let flame=document.getElementById("flame");

flame.classList.add("active");



// Show message

let message=document.getElementById("wishMessage");

message.innerHTML=
"✨ Your wish is traveling to the universe... May all your dreams come true ❤️";


message.classList.add("show");



// Confetti

let confetti =
document.getElementById("confetti");


for(let i=0;i<100;i++){


let piece=document.createElement("span");


piece.innerHTML="🎉";


piece.style.position="fixed";


piece.style.left=Math.random()*100+"vw";


piece.style.top="-20px";


piece.style.fontSize=
Math.random()*20+10+"px";


piece.style.animation=
"fall 3s linear";


confetti.appendChild(piece);



setTimeout(()=>{

piece.remove();

},3000);



}


// cake glow

document.querySelector(".cake")
.style.filter=
"drop-shadow(0 0 40px #f472b6)";


}