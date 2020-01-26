import "./arrayHelpers.js";
import { notaService as service } from "./nota/service.js";
import { log } from "./handles.js";
import { takeUntil, debounceTime } from "./operators.js";

document
    .querySelector("#myButton")
    .onclick = debounceTime(500,
        takeUntil(3, () => service
            .sumItemsFromNotasWhereCodeIsEqualTo("2143")
            .then(log)
            .catch(log)
        )
    );
