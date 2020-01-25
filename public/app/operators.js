export const partialize = (fn, ...params) =>
    fn.bind(null, ...params);

// Math Composition
export const compose = (...fns) => value =>
    fns.reduceRight(
        (previousValue, fn) => fn(previousValue),
        value
    );
// Unix/Linux Pipe operator
export const pipe = (...fns) => value =>
    fns.reduce(
        (previousValue, fn) => fn(previousValue),
        value
    );