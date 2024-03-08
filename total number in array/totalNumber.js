/*
 * Total of numbers in an array
 */
const myArray1 = [1, 2, 3, 4, 5, 6, 7];
const totalNumber = myArray1.reduce((acc, curr) => {
    // console.log('acc', acc)
    // console.log('curr', curr)
    // console.log('---')
    return acc + curr
}, 0)
console.log(totalNumber);

/*
 * Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
 */

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const totalAmount = (arr) => {
    return arr.reduce((acc, curr) => {
        // console.log('acc', acc)
        // console.log('curr', curr)
        // console.log('---'
        return acc + curr.price
    }, 0)
}
console.log(totalAmount(wishlist));

