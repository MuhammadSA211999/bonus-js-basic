// recursion sum:

//remember:1. **sum bonder sorto dite hoy ebong ta if e korte hoy**
// ** remember 2. man ek ek kore komanur nirdesh dite hoy**
function sum(i) {
    console.log(i)
    if (i == 1) {
        return 1;
    }
    return i + sum(--i);
}
console.log(sum(5))


// let sum = 0;
// for (let i = 300; i >= 1; i--) {
//     sum = sum + i;


// } console.log(sum)

// let sum = 0;
// let count = 0;
// let avg = 0;
// for (let i = 300; i >= 1; i--) {
//     sum = sum + i;
//     count = count + 1;
//     avg = sum / count;


// } console.log(sum, count, avg)