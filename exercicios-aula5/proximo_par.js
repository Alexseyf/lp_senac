const prompt = require("prompt-sync")()

let num = Number(prompt("Número: "))

if(num%2 === 0){
  console.log(`Par seguinte: ${num+2}`)
} else {
  console.log(`Par seguinte: ${num+1}`)
}