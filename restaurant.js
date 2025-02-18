const age = 41;
const price = 1000;


if (age <= 10) {
    console.log('you can eat for free')
}
else if (age >= 60) {
    //30% discount
    const discount = price * 30 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if (age >= 50) {
    // 20% discount
    const discount = price * 20 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if (age >= 40) {
    //10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else {
    console.log(price)
}