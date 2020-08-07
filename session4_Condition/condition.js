// let a = prompt("Input a=");
// let b = prompt('Input b= ');
// let c = prompt('Input c= ');

// if (a>b) {
//     if (b > c) {
//         console.log(`${a}, ${b}, ${c}`);
//     } else {
//         if (a > c) {
//             console.log(`${a}, ${c}, ${b}`);
//         } else {
//             console.log(`${c}, ${a}, ${b}`);
//         }
//     }
// } else {
//     if (a > c) {
//         console.log(`${b}, ${a}, ${c}`);
//     } else {
//         if (b>c) {
//             console.log(`${b}, ${c}, ${a}`);
//         } else {
//             console.log(`${c}, ${b}, ${a}`);
//         }
//     }
// }

// let height = prompt('Input height (cm)= ');
// let mass = prompt('Input masss (kg)= ');
// let bmi = (mass)/ ((height/100)**2)
// if (bmi < 15){
//     console.log('You\'re very severely underweight');
// } else if (bmi < 16) {
//     console.log("You're Severely underweight ");
// } else if (bmi <18.5) {
//     console.log("You're Underweight");
// } else if (bmi < 25) {
//     console.log("You're Normal (healthy weight)");
// } else if (bmi < 30) {
//     console.log("You're Overweight");
// } else if (bmi < 35) {
//     console.log("You're Obese Class I (Moderately obese)");
// } else if (bmi < 40) {
//     console.log("Your're Obese Class II (Severely obese)");
// } else {
//     console.log("You're Obese Class III (Very severely obese");
// }

let month = Number(prompt('Input month: '))
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('31 days');
        break;
    case 2:
        console.log('28 days');
        break;
    case 4:
    case 6:
    case 9:
    case 11:   
        console.log('28 days');
        break;
    default:
        console.log('Not exist');       
}