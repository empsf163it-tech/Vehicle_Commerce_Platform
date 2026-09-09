
const key="autora_cart";
function cart(){return JSON.parse(localStorage.getItem(key)||"[]")}
function updateCart(){document.querySelectorAll(".cart-count").forEach(x=>x.textContent=cart().length)}
function addVehicle(name,price){let c=cart();c.push({name,price});localStorage.setItem(key,JSON.stringify(c));updateCart();const b=document.querySelector("#addBtn");if(b){b.textContent="Added to shortlist";setTimeout(()=>b.textContent="Add to shortlist",1200)}}
function chooseColor(color){const art=document.querySelector(".detail-image .mini-car");if(!art)return;art.style.background=color;art.style.transition=".5s"}
document.addEventListener("DOMContentLoaded",()=>{
 updateCart();
 const dark=document.querySelector("#darkToggle");if(dark)dark.onclick=()=>document.body.classList.toggle("dark");
 document.querySelectorAll("form[data-demo]").forEach(f=>f.addEventListener("submit",e=>{e.preventDefault();alert("Demo submitted. No account is required.");}));
 const buy=document.querySelector("#buyBtn");if(buy)buy.onclick=()=>{alert("Demo purchase flow complete. Payment can be integrated later.");localStorage.removeItem(key);location.href="index.html"};
 const sticky=document.querySelector(".sticky-buy");window.addEventListener("scroll",()=>{if(sticky)sticky.classList.toggle("show",scrollY>450)});
});
