function Multiples(mult,m,n){
//The function will store the first n multiples of m in the array mult.

    for (let i=0; i<n; i++)
        mult[i]=m*(i+1);

    {
        return mult;

    }   


}
let myArray = [];
console.log(Multiples(myArray, 5, 10));




function Multiples (mult,m,n);
{
    let absX= Math.abs(n);
    let index= 1;
    while(index<=absX)
    {
        mult.push(index*m);
        index=index+1;
    }

}


