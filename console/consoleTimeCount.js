console.time('timer1');
console.time('timer2');
for (count = 1; count <= 5; count++) {
    console.log(count);
}
console.timeEnd('timer1');
for (count = 1; count <= 7; count++) {
    console.log(count);
}
console.timeEnd('timer2');

