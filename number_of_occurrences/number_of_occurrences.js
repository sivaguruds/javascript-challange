// Change in an object with the number of occurrences

let arr = ["Los Angeles", "London", "Amsterdam", "Singapore", "London", "Tokyo", "Singapore"];

const occurrences = (array) => {
    return array.reduce((acc, curr) => {
        console.log('acc', acc)
        console.log('curr', curr)
        console.log('---')
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1
        return acc
    }, {})
}

console.log(occurrences(arr));

/*
 * Problem six
 * Return an object where each property is the name of the an ice cream flavour and each value is an integer that is the total count of that flavour.
 * Store the returned data in a new iceCreamTotals variable.
 */

const data = [
    { name: 'Superman', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
    { name: 'Batman', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
    { name: 'Flash', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
    { name: 'Aquaman', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
    { name: 'Green Lantern', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
    { name: 'Robin', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
];

const iceCreamTotals = (arr) => {
    return arr.reduce((acc, curr) => {
        console.log('acc', acc)
        console.log('curr', curr)
        console.log('---')
        curr.favoriteIceCreams.forEach((flavour) => {
            acc[flavour] = acc[flavour] ? acc[flavour] + 1 : 1
        })
        return acc
    }, {})
}

console.log(iceCreamTotals(data))