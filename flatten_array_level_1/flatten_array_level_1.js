/*
 * Given an array of arrays, flatten them into a single array
 */

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const flattenArray = (arr) => {
    return arr.reduce((acc, curr) => {
        // console.log('acc', acc)
        // console.log('curr', curr)
        // console.log('---')
        return acc.concat(curr)
    })
}

console.log(flattenArray(arrays));

let arrayValue = [1, [2, [3, [4, [5]]]]];
const flattenArrayNes = (arr) => {
    return arr.reduce((prev, curr) => {
         return prev.concat(Array.isArray(curr) ? flattenArrayNes(curr) : curr )
    }, [])
};

console.log(flattenArrayNes(arrayValue))

