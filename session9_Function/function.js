// function factorial(n) {
//     let p = 1
//     for (let i =1; i <= n; i++) {
//         p*=i
//     }
//     return p
// }
function factorial(n) {
    if (n == 1) {
        return 1
    }
    return n*factorial(n-1)
}
let gt = Number(prompt('Input factorial: '))
console.log(`${gt}! = ${factorial(gt)}`);

// let n = Number(prompt('Nhap so phan tu chuoi: '))
// let arr = []
// for (let i = 0; i < n; i++) {
//     let index = Number(prompt('Input index value: '))
//     arr.push(index)
// }

// function sum(arr) {
//     let s = 0
//     for (let i = 0; i < arr.length; i++) {
//         s += arr[i]
//     }
//     return s
// }
// console.log('Sum = ',sum(arr));


// function max_number(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//             console.log(max);
//         }
//     }
//     return max
// }

// console.log('max = ', max_number(arr));

// function min_number(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (min > arr[i]) {
//             min = arr[i];
//         }
//     }
//     return min
// }

// console.log('Min = ', min_number(arr));

// let mid = Number(prompt('Input number needed to be compared: '));
// function compare(arr, mid) {
//     let new_arr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < mid) {
//             new_arr.push(arr[i])
//         }
//     }
//     return new_arr
// }

// console.log('New array: ', compare(arr,mid));