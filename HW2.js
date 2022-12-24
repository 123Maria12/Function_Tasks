
function isSimple(num){


    if (num <= 1 || num > 1000) return "Data is incorrect";
    else if (num == 2) return "The number is prime";
    for (let i = 2; i <= num; i++)
            if (num % 2 === 0) return "The number is not prime";
 
            return "The number is prime";
            
}

console.log(isSimple(2000));
console.log(isSimple(53));
console.log(isSimple(26));
console.log(isSimple(73));

