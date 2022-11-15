function returnFalsyValues (object, func) {
    for(let [property, value] of Object.entries(object)){
        if(func(value)){
        delete object[property]
        }
       }
    return object
    }
const isFalsy = (x) => typeof x === 'string';

const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, isFalsy)
    
console.log(result);