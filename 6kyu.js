let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [2, 4, 6, 8];

function arrayDiff(a, b) {
    let result = []
    for (let x of a) {
        if (b.includes(x) == false) {
            result.push(x)
        }
    }
    return result
}

console.log(arrayDiff(arr1, arr2));
String.prototype.camelCase = function() {
    return this.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
let q = "hello world".camelCase()
console.log(q);

arr2.map((e, i, arr) => console.log(e, i, arr))

let e = [1]
let w = 2
let r = e.concat(w)
console.log(r)