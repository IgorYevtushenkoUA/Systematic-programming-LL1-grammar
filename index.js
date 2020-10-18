document.getElementById("btn-instruction").addEventListener("click", function (e) {
    let modal = document.getElementById("modal-window-instruction")
    modal.style.display = "block"
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
})

let surname = ""

document.getElementById("btn-save").addEventListener("click", function (event) {
    surname = document.getElementById("input-surname-field").value
    alert(surname)
})

document.getElementById("btn-random-text").addEventListener("click",function (event) {
    // do interesting things
})

