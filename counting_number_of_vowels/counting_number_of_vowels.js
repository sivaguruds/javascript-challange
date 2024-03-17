/* Counting number of vowels in a string with JavaScript - 17/03/2024 */

let value = 'Counting number of vowels in a string with JavaScript';

const countVowels = (str) => {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (const char of str) {
        if (vowels.includes(char)) {
            count += 1;
        }
    }
    return count;
}

console.log(countVowels(value));

const count = (str) => {
    const match = str.match(/[aeiou]/gi);
    return match ? match.length : 0;
}

console.log(count(value))