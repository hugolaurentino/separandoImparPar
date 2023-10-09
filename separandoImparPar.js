const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = [];
const impares = [];

// for (const números of original) {
//     números % 2 === 0 ? pares.push(números) : impares.push(números);
// }

// for (let números = 0; números < original.length; números++) {
//     const element = original[números];
//     números % 2 === 0 ? pares.push(números) : impares.push(números);
// }

let vezes = 1
while (vezes < original.length) {
    original[vezes] % 2 === 0 ? impares.push(vezes) : pares.push(vezes);
    vezes++
}
console.log(`Impares ${impares}`);
console.log(pares);