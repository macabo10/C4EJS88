
// let index = arr.findIndex(function (value){
    //     return value === 4;
    // })
    
// console.log(index);
    
// arr.findIndex(function(v,i,a){
    //     return i > 5;
    // })
        
// function giaTribang20(v,i,a) {
    //     return v === 20;
    // }
    // arr.findIndex(giaTribang20)
            
// function giaTriLonHon20 (v) {
    //     return v > 20;
    // }
    
// console.log(arr.find(giaTriLonHon20));

// let arr = [1,20,4,57,3,79]

// function giaTriLonHon20(v) {
//     return v > 20;
// }

// console.log(arr.find(giaTriLonHon20));

// function giaTriLonHon10(v) {
//     return v > 10;
// }
// console.log(arr.filter(giaTriLonHon10));

// function chan(v) {
//     return v % 2 == 0;
// }
// console.log(arr.filter(chan));

// function lonHon5(v) {
//     return v > 5;
// }
// console.log(arr.some(lonHon5));

// console.log(arr.some(chan));

// function le(v) {
//     return v % 2 == 1;
// }
// console.log(arr.every(le));


// let phones = [
//     'iPhone X',
//     'Galaxy Note 10',
//     'Xperia 2'
// ];

// function chuaA(v) {
//     if (v.match('a')) {
//         return v;
//     } 
// }

// function chuaG(v) {
//     if (v.includes('g')) {
//         return v;
//     } 
// }

// function daiHon8KiTu(v) {
//     return v.length > 8;
// }

// function batDauBoiX(v) {
//     if (v[0].match('x')) {
//         return v;
//     } 
// }

// console.log(phones.find(chuaA));
// console.log(phones.filter(chuaG));
// console.log(phones.filter(daiHon8KiTu));
// console.log(phones.find(batDauBoiX));

function print(phones) {
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        console.log(`${i + 1}`);
        for (const key in phone) {
            const value = phone[key];
            console.log(`${key}: ${value}`);
        }
    }
}


let phones = [
    {
        'name': 'iPhone X',
        'price': 20e6,
        'brand': 'Apple',
    },
    {
        'name': 'Galaxy Note 10',
        'price': 22e6,
        'brand': 'Samsung',
    },
    {
        'name': 'Xperia 2',
        'price': 15e6,
        'brand': 'Sony',
    }
];

function chuaIphone(v) {
    if (v['name'].toLowerCase().includes('iphone')) {
        return v.name
    }
}

console.log(phones.filter(chuaIphone));

function gia10Den20(v) {
    if (v['price'] < 20e6 & v['price'] > 10e6) {
        return v.name
    }
}

console.log(phones.find(gia10Den20));

function giaBe18(v) {
    for (let i = 0; i < phones.length; i++) {
        if (v['price'] < 18e6) {
            return true
            break
        }
    }
    
}
console.log(phones.some(giaBe18));

phones.sort(function(p1,p2){
    return p1.name.localeCompare(p2.name)
})

console.log(phones);