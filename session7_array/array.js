// // let arr =[1,2,3,4,5]
// // let count = 0 
// // for (let i = 0; i < arr.length; i++) {
// //     // if (arr[i] % 2 == 0) {
// //     //     console.log(arr[i]);
// //     // }
// //     if  (arr[i] % 2 == 1) {
// //         count +=  1
// //     }
// // }
// // console.log(count);
// let arr = ['*',2,56,'23']
// let b = ['5',2]
// let c = arr + b
// console.log(c);

let a = []
let s = 0
let oddNumber = []
let hon10 = []
for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Input number: '));
    a.push(num)
    if (num % 2 == 0) {
        oddNumber.push(num)
    }
    if (num > 10) {
        hon10.push(num)
    }
    s += num
}
console.log(a);
console.log('So chan: ', oddNumber.length);
console.log(oddNumber);
console.log('So > 10: ', hon10.length);
console.log(hon10);
console.log('Averange = ', s/5);
let newIndex = Number(prompt('Input new Index'))
a[newIndex] = Number(prompt('Input new value: '))
console.log('New array',a);
let newNum = Number(prompt('Input new number: '))
// let newArray = []
for (let j = 0; j < a.length; j++) {
    if (a[j] >= newNum) {
        a.splice(i,1)
        i--
    }
}

console.log(a);
