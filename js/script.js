import {Modal} from "./modal.js"
import {AlertError} from "./alert-error.js"
import {calculateBMI, notANumber} from "./utils.js"

// Variables
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

/* const modalWrapper = document.querySelector(".modal-wrapper")
const modalMessage = document.querySelector(".modal .title span")
const modalBtnClose = document.querySelector(".modal button.close") */

/* const Modal = {
    wrapper: document.querySelector(".modal-wrapper"), // POPUP screen.
    message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".modal button.close"),

    open() {
        Modal.wrapper.classList.add("open")
    },
    close() {
        Modal.wrapper.classList.remove("open")
    }
} */

/* 03 ways to create and assign function to an event:
form.onsubmit = function() {}

form.onsubmit = () => {} //Arrow function

form.onsubmit = handleSubmit
function handleSubmit() {} */

form.onsubmit = function(event) {
    event.preventDefault() // Don't run the default. The default is: Load the webpage.

    const weight = inputWeight.value
    const height = inputHeight.value

    const WeightOrHeihtIsNotANumber = notANumber(weight) || notANumber(height)

    if(WeightOrHeihtIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = calculateBMI(weight, height)    
    displayResultMessage(result)
} 

function displayResultMessage(result) {
    const message = `Your BMI is ${result}`
    
    Modal.message.innerText = message
    /* modalWrapper.classList.add("open") */
    Modal.open()
}

// Modal.buttonClose.onclick = () => { //Arrow function.
    /* modalWrapper.classList.remove("open") */
//    Modal.close()
// }

/* Another possibility:
modalBtnClose.onclick = function() {
    modalWrapper.classList.remove("open")
} */

// CHALLENGE:
// Fechar a janela de erro ao digitar no campo.
// Evento é de nome input.

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
