// // const products = [
// //     { name: 'laptop', price: 40000 },
// //     { name: 'laptop asus', price: 38000 },
// //     { name: ' asus watch', price: 15000 },
// //     { name: 'acer mobile', price: 12000 },
// //     { name: 'microlab speaker', price: 6000 },
// //     { name: 'esonic speaker', price: 100 },
// //     { name: 'esonic spke', price: 8000 },
// //     { name: 'eso speaker', price: 20000 },
// //     { name: 'esonic spker', price: 18000 },
// // ];
// // for (let product of products) {
// //     if (product.price < 12000) {
// //         break;
// //     }
// //     console.log(product)
// // }

// const products = [
//     { name: 'laptop', price: 40000 },
//     { name: 'laptop asus', price: 38000 },
//     { name: ' asus watch', price: 15000 },
//     { name: 'acer mobile', price: 12000 },
//     { name: 'microlab speaker', price: 6000 },
//     { name: 'esonic speaker', price: 1000 },
//     { name: 'esonic spke', price: 8000 },
//     { name: 'eso speaker', price: 20000 },
//     { name: 'esonic spker', price: 18000 },
// ];
// for (let product of products) {
//     if (product.price < 12000) {
//         continue;
//     }
//     console.log(product);
// }
function compare(a, b) {
    if (a.toString() === b) {
        return true
    }
    else {
        return false
    }

}
let result = compare(15, 15)
// console.log(result);
const arr = [1, 2, 3, 4, 5, 6, 7]
for (let i = 0; i < arr.length; i++) {
    if (i == 5) {
        continue;
    } console.log(arr[i]);
}



