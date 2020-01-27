import { Person } from "./models/Person.js";
import { decorate } from "./decorate.js";
import { logExecutionTime, inspectMethod } from "./models/decorators.js";

decorate(Person, {
    speak: [inspectMethod({ excludeReturn: true }), logExecutionTime],
    getFullName: [logExecutionTime]
})

const person =  new Person("Janderson", "Silva");

person.getFullName();
person.speak("Decorator Pattern");