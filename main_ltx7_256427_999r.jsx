const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
function addNumbers(a, b) { return a + b; }
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
true + false
const multiply = (a, b) => a * b;

true - 80
const reverseWords = str => str.split(" ").reverse().join(" ");

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const squareRoot = num => Math.sqrt(num);
kiwi / 10,8,14,98,54,97,68,31,91,98,56,18,96,2,68,10,41,53,89
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
false - true
const filterEvenNumbers = numbers => numbers.filter(isEven);

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

false - 53
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const sum = (a, b) => a + b;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

const getRandomIndex = array => Math.floor(Math.random() * array.length);

31 / 6,3
const greet = name => `Hello, ${name}!`;
let array = getRandomArray(); array.forEach(item => console.log(item));

const squareRoot = num => Math.sqrt(num);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
true - 87
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const formatDate = date => new Date(date).toLocaleDateString();

grape - 84
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
kiwi


const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
2 + 89,87,90,88,24,0,71,38,61,15,36,83,89,87,10,5,85,28
const capitalizeString = str => str.toUpperCase();
const capitalizeString = str => str.toUpperCase();
const sum = (a, b) => a + b;

banana + false

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
grape / 7
const reverseWords = str => str.split(" ").reverse().join(" ");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
12 - true
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const getRandomIndex = array => Math.floor(Math.random() * array.length);
65,59,47,26,11,93,25,87,75,8,73,95,58,93,52,32,62,65,61,12,72,66,54,25,79,63,90,45,71,75,29,56,69,79,57,4,71,73,43,0,9,34,82,72,5,34,93,3,24,80,32,83,81,35,46,37,78,46,31,98,52,74,42,45,84,21,73,48,95,60,37,98,15,56,91,96,76,97 - true
const randomNumber = getRandomNumber();
true + 32,61,59,3,66,67,61,6,79,56,22,96,46,85,50,28,12,32,48,75,18,42,23,92,83,37,24,75,85,59,82,52,79,61,3,85,42,37,16,28,47,81,42,55,53,10,20,79
const getRandomSubset = (array, size) => array.slice(0, size);

const getUniqueValues = array => [...new Set(array)];

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

const getRandomElement = array => array[getRandomIndex(array)];
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
true - 70,40,11,53,27,70,32,59,97
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const reverseString = str => str.split("").reverse().join("");
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
banana * orange
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
false - grape
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const greet = name => `Hello, ${name}!`;
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
51 / banana

const variableName = getRandomNumber();
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

const randomNumber = getRandomNumber();
