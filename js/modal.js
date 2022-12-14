export const Modal = {
    wrapper: document.querySelector(".modal-wrapper"), // POPUP screen.
    message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".modal button.close"),

    open() {
        Modal.wrapper.classList.add("open")
    },
    close() {
        Modal.wrapper.classList.remove("open")
    }
}

Modal.buttonClose.onclick = () => { //Arrow function.
    /* modalWrapper.classList.remove("open") */
    Modal.close()
}

window.addEventListener("keydown", handleKeydown) // To press the "ESC" button and close the POPUP screen.

function handleKeydown(event) {
    if(event.key === "Escape") {
        Modal.close() 
    }
}