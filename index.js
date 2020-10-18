import {data_text_ua} from "./data/ukrainian_texts.js";
import {LL1} from "./LL1.js";


let surname = ""
let ll1 = new LL1()

function outputWordsText(data_arr) {
    let result = ""
    for (let i = 0; i < data_arr.length; i++) {
        result += data_arr[i] + "| \t"
        if (i % 10 === 0) result += "\n"
    }
    return result
}

document.getElementById("btn-instruction").addEventListener("click", function (e) {
    let modal = document.getElementById("modal-window-instruction")
    modal.style.display = "block"
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
})


document.getElementById("btn-save").addEventListener("click", function (event) {
    surname = document.getElementById("input-surname-field").value
    alert("Зміни зберегли")
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
        ll1.setText(text)
        ll1.setSurname(surname)
        ll1.sortWordBySpecialClasses()
        console.log(ll1.getSurnameWords)
        alert("Готово")
    }
})

document.getElementById("btn-surname").addEventListener("click", function () {
    let modal = document.getElementById("modal-window-words-surname")

    let contentBlock = document.getElementById("modal-window-main-surname")
    let content = "<dic class=" + "\"content-block-words\">" + outputWordsText(ll1.getSurnameWords) + "</div>"
    contentBlock.innerHTML = content


    modal.style.display = "block"
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
})
document.getElementById("btn-not-surname").addEventListener("click", function () {
    let modal = document.getElementById("modal-window-words-not-surname")
    // document.getElementById("modal-window-main-not-surname").innerHTML += ll1.getNoSurnameWords.toString() === "" ? "~~~~~~~~~~~~~" : "<p>" + ll1.getNoSurnameWords.toString() + "</p>"

    let contentBlock = document.getElementById("modal-window-main-not-surname")
    let content = "<div class=" + "\"content-block-words\">" + outputWordsText(ll1.getNoSurnameWords) + "</div>"
    contentBlock.innerHTML = content

    modal.style.display = "block"
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
})
document.getElementById("btn-number").addEventListener("click", function () {
    let modal = document.getElementById("modal-window-words-number")
    // document.getElementById("modal-window-main-number").innerText = ll1.getNumberWords.toString() === "" ? "~~~~~~~~~~~~~" : "<p>" + ll1.getNumberWords.toString() + "</p>"

    let contentBlock = document.getElementById("modal-window-main-number")
    let content = "<dic class=" + "\"content-block-words\">" + outputWordsText(ll1.getNumberWords) + "</div>"
    contentBlock.innerHTML = content

    modal.style.display = "block"
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
})
document.getElementById("btn-email").addEventListener("click", function () {
    let modal = document.getElementById("modal-window-words-email")
    // document.getElementById("modal-window-main-email").innerText = ll1.getEmailWords.toString() === "" ? "~~~~~~~~~~~~~" : "<p>" + ll1.getEmailWords.toString() + "</p>"

    let contentBlock = document.getElementById("modal-window-main-email")
    let content = "<dic class=" + "\"content-block-words\">" + outputWordsText(ll1.getEmailWords) + "</div>"
    contentBlock.innerHTML = content

    modal.style.display = "block"
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
})
document.getElementById("btn-phone").addEventListener("click", function () {
    let modal = document.getElementById("modal-window-words-phone")
    //document.getElementById("modal-window-main-phone").innerText = ll1.getPhoneNumberWords.toString() === "" ? "~~~~~~~~~~~~~" : "<p>" + ll1.getPhoneNumberWords.toString() + "</p>"

    let contentBlock = document.getElementById("modal-window-main-phone")
    let content = "<dic class=" + "\"content-block-words\">" + outputWordsText(ll1.getPhoneNumberWords) + "</div>"
    contentBlock.innerHTML = content

    modal.style.display = "block"
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
})

document.getElementById("btn-not-understand").addEventListener("click", function () {
    let modal = document.getElementById("modal-window-words-not-understand")
    // document.getElementById("modal-window-main-not-understand").innerText = ll1.getNotUnderstandWords.toString() === "" ? "~~~~~~~~~~~~~" : "<p>" + ll1.getNotUnderstandWords.toString() + "</p>"

    let contentBlock = document.getElementById("modal-window-main-not-understand")
    let content = "<dic class=" + "\"content-block-words\">" + outputWordsText(ll1.getNotUnderstandWords) + "</div>"
    contentBlock.innerHTML = content

    modal.style.display = "block"
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
})





