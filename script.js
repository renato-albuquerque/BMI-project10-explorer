// Variables
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#Height")

/* 03 ways to create and assign function to an event:
form.onsubmit = function() {}

form.onsubmit = () => {} // Arrow function

form.onsubmit = handleSubmit
function handleSubmit() {} */

form.onsubmit = function(event) {
    event.preventDefault() // Don't run the default. The default is: Load the webpage.

    const weight = inputWeight.value
    const heigth = inputHeight.value

    console.log(weight, heigth)
}



