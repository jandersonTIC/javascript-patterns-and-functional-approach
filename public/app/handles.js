export const handleStatus = response => 
    response.ok ? response.json() : Promise.reject(response.statusText);

export const log = param => {
    console.log(param);
    return param;
};