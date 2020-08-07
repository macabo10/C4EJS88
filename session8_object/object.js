// let obect_empty = {};
// let myInfo = {
//     'name': 'Hung',
//     'age':  17,
//     hobbies: ['reading', 'watching movies'],
// }

// // '''Create'''
// myInfo['school'] = 'Phan Dinh Phung';
// myInfo.class = '12A1';

// // '''Update'''
// myInfo['name'] = 'Phan Viet Hung'
// myInfo.age = 16.9;

// // delete 
// delete myInfo.class

// for (let key in myInfo) {
//     console.log(`${key}: ${myInfo[key]}`);
// }


let userInfo = {}

userInfo['name'] = prompt('Input name: ')
userInfo['age'] = Number(prompt('Input age: '))
userInfo['school'] = prompt('Input school: ')

for (let key in userInfo) {
    console.log(`${key}: ${userInfo[key]}`);
}

let change = prompt('Key wants to be changed: ')
while (userInfo[change] == undefined) {
    console.log('Not available');
    change = prompt('Key wants to be changed: ')
}
userInfo[change] = prompt('New value')

let del = prompt('Key wants to be deleted: ')
while (userInfo[del] == undefined) {
    console.log('Not available');
    del = prompt('Key wants to be changed: ')
}
delete userInfo[del] 

for (let key in userInfo) {
    console.log(`${key}: ${userInfo[key]}`);
}
 