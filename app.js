// function getInitialOdds(n) {
//     return Array.from({length: n}, (_, i) => 2 * i + 1);
//   }

//   console.log(getInitialOdds(5));  // Testni tekshirish

// function getEvenReverse(arr) {
//   let result = [];
//   for (let i = arr.length - 1; i >= 0; i -= 2) {
//     result.push(arr[i]);
//   }
//   return result;
// }

// // Test
// let arr = [4, 5, 7, 8, 6, 9];
// console.log(getEvenReverse(arr)); // Testni tekshirish

// function printPattern(arr) {
//   let result = [];
//   let n = arr.length;
//   for (let i = 0; i < Math.ceil(n / 2); i++) {
//     result.push(arr[i]);
//     if (i !== n - i - 1) {
//       result.push(arr[n - i - 1]);
//     }
//   }
//   console.log(result.join(", "));
// }

// // Test
// let arr = [4, 5, 7, 8, 6, 9];
// printPattern(arr); // Testni tekshirish

// function rangeSum(arr, K, L) {
//   let sum = 0;
//   for (let i = K; i <= L; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// // Test
// let arr = [1, 6, 9, 5, 8, 10, 15];
// console.log(rangeSum(arr, 2, 5)); // Testni tekshirish

// function getSingleArr(arr) {
//   // Elementlarning qatnashishini hisoblash uchun obyekt yaratamiz
//   let frequency = {};

//   // Elementlarning qatnashishini hisoblaymiz
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     frequency[num] = (frequency[num] || 0) + 1; // Agar element uchun qiymat bo'lmasa, 0 deb hisoblash
//   }

//   // Faqat bir marta qatnashgan elementlarni tanlaymiz
//   let result = [];
//   for (let key in frequency) {
//     if (frequency[key] === 1) {
//       result.push(parseInt(key)); // Ob'ektning kalitlarini son ga aylantiramiz
//     }
//   }

//   return result;
// }

// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// console.log(getSingleArr(arr)); // [7, 4, 2, 3, 1, 5]


//6
// function kichikKattaElementAlmashtir(massiv) {
//     // Eng kichik va eng katta elementlar va ularning indekslarini aniqlash
//     let engKichik = massiv[0];
//     let engKatta = massiv[0];
//     let engKichikIndeks = 0;
//     let engKattaIndeks = 0;

//     for (let i = 1; i < massiv.length; i++) {
//         if (massiv[i] < engKichik) {
//             engKichik = massiv[i];
//             engKichikIndeks = i;
//         } else if (massiv[i] > engKatta) {
//             engKatta = massiv[i];
//             engKattaIndeks = i;
//         }
//     }

//     // Eng kichik elementni massivning boshiga, eng katta elementni oxiriga almashtirish
//     [massiv[0], massiv[engKichikIndeks]] = [massiv[engKichikIndeks], massiv[0]];
//     [massiv[massiv.length - 1], massiv[engKattaIndeks]] = [massiv[engKattaIndeks], massiv[massiv.length - 1]];

//     return massiv;
// }

// // Test qilish
// let massiv = [3, 7, 2, 10, 5];
// let natija = kichikKattaElementAlmashtir(massiv);
// console.log("Yangilangan massiv:", natija);

//7
// function o'nggaSiklikSiljituvchi(arr) {
//     // Massivning birinchi elementini o'zgaruvchiga saqlash
//     var birinchi = arr.shift();

//     // Massivning oxiriga birinchi elementni qo'shish
//     arr.push(birinchi);

//     // Natijani qaytarish
//     return arr;
// }

// // Test qilish
// var input = [1, 5, 8, 9, 10];
// var output = o'nggaSiklikSiljituvchi(input);
// console.log(output); // Output: [5, 8, 9, 10, 1]
