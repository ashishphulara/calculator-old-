let string ="";
let buttons = document.querySelectorAll(".btn") 
Array.from(buttons).forEach((btn) => {
btn.addEventListener("click",(event)=> {
    console.log(event.target)
    string = string+event.target.innerHTML
    document.querySelector("input").value=string;
})
});