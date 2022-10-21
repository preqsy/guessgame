
const ps = require("prompt-sync")();

var rangeLimit = 2
var point = 0
var statement = true
var no = ""
function pram() {
    console.log(`${name}  try again pick number between 1 and ${rangeLimit} `)
    no = prompt(`pick number betwin 1 and ${rangeLimit}`)
}

const name = prompt("enter your name");
while (statement) {
    if (name) {

        var randomNumber = Math.floor(Math.random() * rangeLimit + 1)
        no = prompt(`${name} pick number between 1 and ${rangeLimit}`)
        var newNo = Math.floor(no)
        if (randomNumber === newNo) {
            rangeLimit++
            point++
            console.log(`${name} have gotten 1 point you are now in level ${rangeLimit - 1} and your point is ${point}`)
        } else {
            pram()
        }
    } else {
        console.log("enter your name")
        statement = false
    }
}
