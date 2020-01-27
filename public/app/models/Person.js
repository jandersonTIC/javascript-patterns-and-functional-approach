export class Person {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    speak(phrase) {
        const result = `${this._name} is speaking: ${phrase}`;
        return result;
    }

    getFullName() {
        const result = `${this._name} ${this._surname}`;
        return result;
    }
}