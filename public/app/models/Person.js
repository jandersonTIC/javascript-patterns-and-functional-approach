import { inspectMethod, logExecutionTime } from "./decorators.js";
import { decorate } from "../decorate.js";

export class Person {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    speak(phrase) {
        return `${this._name} is speaking: ${phrase}`;
    }

    getFullName() {
        return `${this._name} ${this._surname}`;
    }
}

decorate(Person, {
    speak: [
        inspectMethod({ excludeReturn: true }),
        logExecutionTime
    ],
    getFullName: [logExecutionTime]
})