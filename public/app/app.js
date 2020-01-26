import "./arrayHelpers.js";
import { notaService as service } from "./nota/service.js";
import { log, timeoutPromise } from "./handles.js";
import {
    takeUntil,
    debounceTime,
    partialize,
    compose
} from "./operators.js";

const getNotas = () => 
    timeoutPromise(
        200,
        service.sumItemsFromNotasWhereCodeIsEqualTo("2143")
    )
    .then(log)
    .catch(log);

const action = compose(
    partialize(debounceTime, 500),
    partialize(takeUntil, 3)
)(getNotas);

document.querySelector("#myButton").onclick = action;
