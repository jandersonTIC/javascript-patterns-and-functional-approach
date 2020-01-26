import "./arrayHelpers.js";
import { notaService as service } from "./nota/service.js";
import { log, timeoutPromise, retry } from "./handles.js";
import {
    takeUntil,
    debounceTime,
    partialize,
    compose
} from "./operators.js";
import { EventEmitter } from "./resource/eventEmitter.js";

const getNotas = () => 
    retry(3, 3000, () => timeoutPromise(
        200,
        service.sumItemsFromNotasWhereCodeIsEqualTo("2143")
    ))
    .then(total => EventEmitter.emit('itensTotalizados', total))
    .catch(log);

const action = compose(
    partialize(debounceTime, 500),
    partialize(takeUntil, 3)
)(getNotas);

document.querySelector("#myButton").onclick = action;
