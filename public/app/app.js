import "./arrayHelpers.js";
import { notaService as service } from "./nota/service.js";
import { log } from "./handles.js";

document
    .querySelector("#myButton")
    .onclick = () => service
        .sumItemsFromNotasWhereCodeIsEqualTo("2143")
        .then(log)
        .catch(log);
