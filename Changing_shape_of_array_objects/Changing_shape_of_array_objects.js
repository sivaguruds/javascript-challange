/* Changing shape of objects inside arrays
When we reduce an array we don't have to reduce it to a single value. We can also change its content. For example, if it is an array of objects we can change the shape of those objects. The returned value will be still an array, only the shape of the objects inside the array will be different. */

const records = [
    { name: 'Joe', grade: 'A' },
    { name: 'Tom', grade: 'B' },
    { name: 'Sandra', grade: 'B' },
    { name: 'Joel', grade: 'C' },
    { name: 'Victoria', grade: 'A' }
  ];

  const changeRecords = (arr) => {
    return arr.reduce((acc, curr) => {
      console.log('acc', acc)
      console.log('curr', curr)
      console.log('---')
      acc[curr.name] = {
       grade: curr.grade,
       pass: ['A', 'B'].includes(curr.grade)
      }
      return acc
    }, {})
  }

  console.log(changeRecords(records))