export class LL1 {
    'use strict'
    constructor(text = "", surname = "Євтушенко") {
        this._text = text
        this._surname = surname
    }

    setText(text){this._text = text}
    setSurname(surname){this._surname = surname}

    _surnameWords  = []
    _noSurnameWords  = []
    _numberWords  = []
    _emailWords = []
    _phoneNumberWords  = []
    _notUnderstandWords = []

    get getSurnameWords(){return this._surnameWords }
    get getNoSurnameWords(){return this._noSurnameWords }
    get getNumberWords(){return this._numberWords }
    get getEmailWords(){return this._emailWords}
    get getPhoneNumberWords(){return this._phoneNumberWords }
    get getNotUnderstandWords(){return this._notUnderstandWords}

    clearDaraArr(){
        this._surnameWords  = []
        this._noSurnameWords  = []
        this._numberWords  = []
        this._emailWords = []
        this._phoneNumberWords  = []
        this._notUnderstandWords = []
    }

    isLetter(ch) {
        return ch.match(/[a-zа-яїєіґ]/i)
    }

    isDecimal(ch) {
        return ch.match("/[0-9]/")
    }

    /**
     *
     * @param {string} word
     * @returns {*}
     */
    delLasCharIfNotLetterOrDecimal(word) {
        while (!this.isLetter(word.charAt(word.length - 1)) && this.isDecimal(word.charAt(word.length - 1))) {
            word = word.slice(0, word.length - 1)
        }
        return word
    }

    /**
     *
     * @param {string} word
     * @param {string} surname
     * @returns {boolean|boolean}
     */
    isSurnameWordRegex(word, surname) {
        let reg = new RegExp(`[${surname}]`, 'img')
        let result = word.match(reg)
        return result !== null && result.length === word.length
    }

    /**
     *
     * @param  {string} word
     * @returns {boolean|boolean}
     */
    isNotSurnameWordRegex(word) {
        let reg = /[-`'’a-zа-яїєіґ]/img
        let result = word.match(reg)
        return result !== null && result.length === word.length
    }

    /**
     *
     * @param {string} word
     * @returns {boolean}
     */
    isNumberRegex(word) {
        let reg = /^[-]?[\d]+([.]?[\d]+)?$/im
        let result = word.match(reg)
        return result !== null
    }

    /**
     *
     * @param {string} word
     * @returns {boolean}
     */
    isEmailRegex(word) {
        let reg = /^[a-z]+[a-z0-9]*(?:\.[a-z0-9]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/im
        let result = word.match(reg)
        return result !== null
    }

    /**
     *
     * @param {string} word
     * @returns {boolean}
     */
    isPhoneRegex(word) {
        let reg = /^[\+]?(38)?[ ]?[(]?[\d ]{3}[)]?[ ]?[\d]{3}[-]?[ ]?[\d]{2}[-]?[ ]?[\d]{2}$/im
        let result = word.match(reg)
        return result !== null
    }

    sortWordBySpecialClasses() {
        this.clearDaraArr()
        let text = this._text.split(" ")
        console.log(this._surname)
        console.log(text)
        for (let i = 0; i < text.length; i++) {
            text[i] = this.delLasCharIfNotLetterOrDecimal(text[i])
            let word = text[i]
            if (this.isSurnameWordRegex(word, this._surname)) {
                this._surnameWords.push(word)
            } else if (this.isNotSurnameWordRegex(word)) {
                this._noSurnameWords .push(word)
            } else if (this.isNumberRegex(word)) {
                this._numberWords .push(word)
            } else if (this.isEmailRegex(word)) {
                this._emailWords.push(word)
            } else if (this.isPhoneRegex(word)) {
                this._phoneNumberWords .push(word)
            } else {
                this._notUnderstandWords.push(word)
            }
        }
    }
}
