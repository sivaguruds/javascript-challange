/* Finding longest string in array */

let arr = [
    'first item',
    'second item is longer than the third one',
    'third longish item'
];
let len = 0;
let longest;

for (let index = 0; index < arr.length; index++) {
    if (arr[index].length > len) {
        len = arr[index].length
        longest = arr[index]
    }
};

console.log(longest)

const findinglength = (value) => {
    return value.reduce((acc, curr) => {
        console.log('acc', acc)
        console.log('curr', curr)
        console.log('---')
        return acc.length > curr.length ? acc : curr
    })
};

console.log(findinglength(arr))