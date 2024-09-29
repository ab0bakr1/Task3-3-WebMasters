// Exercise 1
function FilterNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
const Numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const evenNumbers = FilterNumbers(Numbers);

console.log(evenNumbers);


// Exercise 2
function LargeNumber(arr) {
    return Math.max(...arr);
}
const Numbers2 = [2,4,63,76,99,13,21,6,515];
const LarNumber = LargeNumber(Numbers2);

console.log(LarNumber);

// Exercise 3
function MaqlopString(str) {
    return [...str].reverse().join('');
}
const String = "level , racecar";
const StringNew = MaqlopString(String);

console.log(StringNew);

// Exercise 4
function removeNumber(arr) {
    return [...new Set(arr)];
}
const Numbers3 = [1,2,6,9,2,6,3,4,3,6,4,2,1];
const NewNumbers = removeNumber(Numbers3);

console.log(NewNumbers);