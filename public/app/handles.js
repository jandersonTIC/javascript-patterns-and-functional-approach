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