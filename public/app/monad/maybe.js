export class Maybe {
    constructor(value) {
        this._value = value;
    }

    static of(value) {
        return new Maybe(value);
    }

    isNothing() {
        return this._value === null || this._value === undefined;
    }

    map(fn) {
        return this.isNothing() ?
            Maybe.of(null) :
            Maybe.of(fn(this._value));
    }

    get() {
        return this._value;
    }

    getOrElse(defaultValue) {
        return this.isNothing() ?
            defaultValue :
            this._value;
    }
}
