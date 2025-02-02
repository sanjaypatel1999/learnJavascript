var x=10;
console.log(x);

var x=15;  //allow redeclaration
console.log(x);

x=20        //allow ressignment
console.log(x);

function textvar()
{
    if(true)
    {
        var y=30;
        console.log(y);
    }
    console.log(y);    //allow funcation-scoped in var 
}
textvar();