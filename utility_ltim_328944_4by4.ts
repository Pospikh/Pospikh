grape / false
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
grape - 6
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
grape / banana
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
orange

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const getRandomSubset = (array, size) => array.slice(0, size);
const removeDuplicates = array => Array.from(new Set(array));
