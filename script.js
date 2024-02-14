const btn =document.getElementById("btn");
let data,delay;
function printText(data,delay){
  let disp=document.getElementById("output");
 return setTimeout(function() {
    disp.textContent=data;
  }, delay);
}
btn.addEventListener("click",(e)=>{
  e.preventDefault();
   data=document.getElementById("text").value;
   delay=document.getElementById("delay").value;
  answer();
});
async function answer(){
	await printText(data,delay);
}
