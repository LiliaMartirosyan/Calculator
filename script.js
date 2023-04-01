const btn = document.querySelectorAll(".btn")
const screen= document.querySelector(".screen")

let calcuration = ""

function addToScreen(val){
    calcuration += val
    screen.textContent = calcuration
}

btn.forEach((b)=>{
    b.addEventListener("click",()=>{

        if(b.id === "clear"){
            calcuration = ""
            screen.textContent = ""
        }else if(b.id === "equal"){
            calcuration = eval(calcuration)
            screen.textContent = calcuration
        }else  addToScreen(b.textContent)
        
        
       
    })
})