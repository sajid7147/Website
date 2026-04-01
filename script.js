

let order=document.getElementById("order");
let test=document.getElementById("test");

let colors=["red","blue","green"];
let index=0;

order.addEventListener("click",function()
{

document.body.classList.toggle("dark");
test.textContent="Enjoy your coffee";
test.style.color=colors[index];
index++;

if(index===colors.length)
{
    index=0;
}


});