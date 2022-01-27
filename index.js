// =============================
// =         FizzBuz           =
// =============================

// => Jika bilangan dapat dibagi dengan 3 maka hasilnya Fizz
// => Jika bilangan dapat dibagi dengan 5 maka hasilnya Buzz
// => Jika bilangan dapat dibagi 3 dengan 5 maka hasilnya FizzBuzz
// => Jika bilangan tidak dapat dibagi 3 atau 5 maka akan menampilkan nilai itu sendiri

for (let i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log(i + " FizzBuzz");
    else if (i % 3 == 0) console.log(i + " Fizz");
    else if (i % 5 == 0) console.log(i + " Buzz");
    else console.log(i);
}