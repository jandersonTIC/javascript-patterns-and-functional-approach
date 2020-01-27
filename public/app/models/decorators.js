export const logExecutionTime = (method, property, args) => {
    console.time(property);
    const result = method(...args);
    console.timeEnd(property);
    return result;
}

export const inspectMethod = (method, property, args) => {
    console.log(`Método decorado: ${property}`);
    console.log(`Argumentos do método: ${args}`);
    const result = method(...args);
    console.log(`Resultado do método: ${result}`);
    return result;
}