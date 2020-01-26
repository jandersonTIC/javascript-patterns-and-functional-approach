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

export const takeUntil = (times, fn) =>
    () => times-- > 0 && fn();

export const debounceTime = (milliseconds, fn) => {
    let times = 0;
    return () => {
        clearTimeout(times);
        times = setTimeout(fn, milliseconds);
    };
};