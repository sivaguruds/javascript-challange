/* 
If compare(a,b) is less than zero, the sort() method sorts a to a lower index than b. In other words, a will come first.
If compare(a,b) is greater than zero, the sort() method sort b to a lower index than a, i.e., b will come first.
If compare(a,b) returns zero, the sort() method considers a equals b and leaves their positions unchanged. 

Default - ASCENDING

*/

const arr = [
    { name: 'Mike', age: 20 },
    { name: 'Peter', age: 30 },
    { name: 'Doris', age: 18 },
    { name: 'Edgar', age: 30 },
];

arr.sort((a,b) => {
    if(a.age < b.age) {
        return -1
    }
    if(a.age > b.age) {
        return 1
    }
    if(a.name < b.name) {
        return -1
    }
    if(a.name > b.name) {
        return 1
    }
    return 0
})

console.log(arr)

const numbers = [8, 2, 100, 4];

numbers.sort((a,b) => {
    // return a - b // ASCENDING
    return b- a // DESCENDING
})

console.log(numbers)


const orders = [ 
    {customerName: 'Susan Hilt', orderNumber: 6112083103840, orderDate: '2020-12-04'}, 
    {customerName: 'Robert Boyd', orderNumber: 5812110381784, orderDate: '2020-11-10'}, 
    {customerName: 'Angela Seyller', orderNumber: 2732160097357, orderDate: '2021-01-01'} 
];

orders.sort((a,b) => {
    if(a.orderDate < b.orderDate) {
        return -1
    }
    if(a.orderDate > b.orderDate) {
        return 1
    }
    if(a.orderNumber < b.orderNumber) {
        return -1
    }
    if(a.orderNumber > b.orderNumber) {
        return 1
    }
    return 0
})

console.log(orders)


const states = [ 'California', 'maryland', 'Minnesota', 'ohio', 'Texas' ];

states.sort((a,b) => {
    return a - b
})

console.log(states)