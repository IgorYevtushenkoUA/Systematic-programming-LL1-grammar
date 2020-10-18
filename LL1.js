export class LL1 {

    /**
     * let regexp = /\p{Sc}\d/gu;
     let  str = `Цены: $2, €1, ¥9`;
     */

    /*
    * alert( "Завтрак в 09:00 в комнате 123:456.".match( /\b\d\d:\d\d\b/ ) ); // 09:00
    \b((0|1)\d|2[0-3])[-:][0-5]\d\b - вот корректное отображение 24-часового времени)
    * */

    constructor(text, surname = "Євтушенко") {
        this._text = text
    }

    text = "Вочевидь, зараз не всі пригадають цю серпневу дату – вісімнадцяте святкування Дня Незалежності України. Відлік десятилітньої історії Вишиванкового фестивалю розпочався саме тоді, коли сімдесят дев’ять людей, убраних у виши́ванки, утворили вздовж Потьомкінських сходів так званий «живий ланцюг». Амбітні плани організаторів повністю виправдалися: він сягнув-таки берега моря. Простягаючись білою ниткою від п’єдесталу пам’ятника Рішельє, ланцюг із року в рік ставав усе довшим, а разом із цим зростало й усвідомлення Одеси як українського міста. Зростало настільки, що в 2014 році, незважаючи на невпинну зливу, для участі в акції «Вишиванковий ланцюг» вишикувалася півторатисячна черга, утворивши нескінченне живе море виши́ванок." +
        "Подальші два роки запам’яталися встановленням нових рекордів, адже́ кількість учасників збільшилася вдвічі. До речі, дюк де Рішельє також долучається до цієї події. Четвертий рік поспіль святковий гардероб герцога поповнюється найрізноманітнішими виши́ванками: блакитно-синій і яскраво-червоний, жовтогарячий і ніжно-зелений – ось палітра його ви́шитих візерунків." +
        "Уже вдеся́те майорить Приморський бульвар синьо-жовтими барвами, і вже вкотре ми збираємось у самому серці Одеси, щоб помилуватися показом автентичного вбрання, написати диктант просто неба, концентруючи  нашу енергію й демонструючи всім як свою єдність, так і свою любов до рідного міста та своєї країни."

    surname = "Євтушенко"

    surnameWords = []
    noSurnameWords = []
    numberWords = []
    emailWords = []
    phoneNumberWords = []

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
        console.log(this.text)
        this._text = this.text
        this._text = this._text.split(" ")
        for (let i = 0; i < this._text.length; i++) {
            this._text[i] = this.delLasCharIfNotLetterOrDecimal(this._text[i])
            let word = this._text[i]
            if (this.isSurnameWordRegex(word, this.surname)) {
                this.surnameWords.push(word)
            } else if (this.isNotSurnameWordRegex(word)) {
                this.noSurnameWords.push(word)
            } else if (this.isNumberRegex(word)) {
                this.numberWords.push(word)
            } else if (this.isEmailRegex(word)) {
                this.emailWords.push(word)
            } else if (this.isPhoneRegex(word)) {
                this.phoneNumberWords.push(word)
            } else {
                // console.log("can not read write to another array ")
            }
        }
        console.log(this.surnameWords)
        console.log(this.noSurnameWords)
        console.log(this.numberWords)
        console.log(this.phoneNumberWords)
        console.log(this.emailWords)

        return 1
    }
}

let igor = new LL1("", "Євтушенко")
console.log(igor.sortWordBySpecialClasses())
