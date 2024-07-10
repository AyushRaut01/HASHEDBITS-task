// 3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.

function findTax(salary) {
    let taxAmount;
    switch (true) {
        case (salary > 1500000):
            taxAmount = salary * 0.3;
            break;
        case (salary > 1000000):
            taxAmount = salary * 0.2;
            break;
        case (salary > 500000):
            taxAmount = salary * 0.1;
            break;
        default:
            taxAmount = 0;
    }
    return taxAmount;
}

console.log(findTax(400000)); // Output: 0
console.log(findTax(600000)); // Output: 60000 
console.log(findTax(1200000)); // Output: 240000 
console.log(findTax(1600000)); // Output: 480000 