if (!Array.prototype.$flatMap) {
    Array.prototype.$flatMap = function(callback){
        return this
            .map(callback)
            .reduce((destinationArray, array) =>
                destinationArray.concat(array), []);
    }
}