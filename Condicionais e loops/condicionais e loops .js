//Exercicios Condicionais e Loops




//1
let str = "";
for (let i=0; i <7; i++) {
    str+="#";
    console.log(str);
}

//2
for (let i = 1; i <= 20; i++) {
    let display = "";
    if (i % 3 == 0 && i % 5 == 0) {
        display = "FizzBuzz";
    } else if (i % 3 == 0) { display = "Fizz"; }
    else if (i % 5 == 0) { display = "Buzz"; }
    else { display = i; }
    console.log(display);
}


//3
let pos = "";

for (let row = 0; row < 8; row++) {    
    // espaço se a linha for par
    pos = row % 2 == 0 ? " " : "";

    for (let col = 0; col < 8; col ++) {
        pos += "# ";
    }

    console.log(pos);
}

