let a = []
let n = Number(prompt('n: '))
for (let i = 0; i < n; i++) {
    let inp = Number(prompt('Input value: '))
    a.push(inp)
}

let max = a[0]
let min = a[0]

for (let i = 0; i < a.length; i++) {
    if (max < a[i]) {
        max = a[i]
    }
    if (min > a[i]) {
        min = a[i]
    }
}

console.log('Max = ',max);
console.log('Min = ',min);

let trunggian = 0
for (let i = 0; i < a.length-1; i++) {
    for (let j = i+1; j < a.length; j++) {
        if (a[i] > a [j]) {
            trunggian = a[j]
            a[j] = a[i]
            a[i] = trunggian
        }
    }
}
console.log('New array', a);