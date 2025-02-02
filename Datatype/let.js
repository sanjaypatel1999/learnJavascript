let x=10
console.log(x)

x=25;     //ressignment allow 
console.log(x);

// let x=15   //redeclaration not allow
// console.log(x)

function check()
{
    if(true)
    {
        let y=20;
        console.log(y);
    }
    //console.log(y);    //(y is block-scoped)
}
check()