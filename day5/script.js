console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
console.log('6');
console.log('7');
console.log('8');
console.log('9');
console.log('10');

console.log('1\n2\n3\n4\n5\n6\n7\n8\n9\n10');




let result = prompt("Enter Your Name");
console.log("Hello,",result);

let num = prompt ("Enter a number");
num = Number(num);

if(isNaN(num))
 {
    num = 10;
}
num = num + 10;
console.log(num);

let num2 = prompt("Enter a Grade");
let grade = Number(num2);
if(grade >= 70)
{
    console.log("You passed");
}
else
{
    console.log("You failed");
}
console.log(num2);
