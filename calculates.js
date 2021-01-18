"use strict";
class Suma {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    async resultado() {
        return this.num1 + this.num2;
    }
}
class Resta {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    async resultado() {
        return this.num1 - this.num2;
    }
}
module.exports = { Suma, Resta };
