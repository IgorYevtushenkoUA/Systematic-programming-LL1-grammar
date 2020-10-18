import {data_text_ua} from "./data/ukrainian_texts.js";
import {LL1} from "./LL1.js";


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

document.getElementById("btn-random-text").addEventListener("click", function (event) {
    let randomText = Math.floor(Math.random() * data_text_ua.size)
    document.getElementById("textarea").value = data_text_ua.get(randomText)
})

document.getElementById("btn-start").addEventListener("click", function (event) {
    let text = document.getElementById("textarea").value
    let surname = document.getElementById("input-surname-field").value
    if (text === "") {
        alert("Введіть текст або натисніть на рандомний текст")
    } else {
        let ll1 = new LL1(text, surname)

    }
})

