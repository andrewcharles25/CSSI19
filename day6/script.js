const CountToN = (x)=>
{
    let absX = Math.abs(x);

    let index = 1;
    while (index <= absX)
    {
        console.log(index);
        index=index+1; // index++;index+=1
    }
}


const Prompt = () =>
{
    while(true){
        let response = prompt("Enter a number")
        response=Number(response)
        if (isNaN(response))
        {
        return response;
        }
        
    }
}

function GetNumber()
{
    let num = Number(prompt("Enter a number"))
    while (isNaN(num))
    {
      num = Number(prompt("Enter a number"))
    }
    console.log(num);
}
GetNumber()

