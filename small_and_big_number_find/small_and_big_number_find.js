let arrayValue = [1,2,3,4,5,1,-1,6,7,8,9,10,2,11];
let small = 0
let big = 0
const findSmallBig = (arr) => {
    return arr.reduce((acc, curr) => {
        console.log('acc', acc)
        console.log('curr', curr)
        console.log('---')
        big = acc > curr ? acc : curr
        // small = acc < curr ? acc : curr
        return big
    })
}
console.log(findSmallBig(arrayValue))