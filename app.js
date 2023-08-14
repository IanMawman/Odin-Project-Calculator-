
// checks if user has asked for diplay to be cleared 
document.querySelector("#clearDisplay").addEventListener("click", ()=> {
    document.querySelector ("#output").value= " ";
})  
//when DE is pressed it removes the last number in output
const removeNumber = () =>{
const num = document.querySelector("#output").value.slice (0, -1);
document.querySelector ("#output").value =num;
} 


