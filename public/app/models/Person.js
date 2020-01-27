export class Person {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    speak(phrase) {
        console.time("speak");
        const result = `${this._name} is speaking: ${phrase}`;
        console.timeEnd("speak");
        return result;
    }

    getFullName() {
        console.time("speak");
        const result = `${this._name} ${this._surname}`;
        console.timeEnd("speak");
        return result;
    }
}