export const handleStatus = response => 
    response.ok ? response.json() : Promise.reject(response.statusText);

export const log = param => {
    console.log(param);
    return param;
};

export const timeoutPromise = (milliseconds, promise) => {
    const timeout = new Promise((resolve, reject) =>
        setTimeout(() =>
            reject(`Limite da promisse excedido (limite: ${milliseconds} ms)`),
            milliseconds)
        );
    return Promise.race([
        timeout,
        promise
    ])
};

export const delay = milliseconds => data =>
    new Promise(resolve =>
        setTimeout(() => resolve(data), milliseconds)
    );

export const retry = (retries, milliseconds, fn) =>
    fn().catch(error => {
        console.log(`${retries} Trying again...`);
        return delay(milliseconds)()
            .then(() => retries > 1 ?
                retry((retries - 1), milliseconds, fn) :
                Promise.reject(error)
            );
    });
