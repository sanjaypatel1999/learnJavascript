// const x=10
// console.log(x)

// const x=15;     //redeclaration not allow in const
// console.log(x);

// x=15        //reassignment not allow in const
// console.log(x)


function textconst()
{
    if(true)
    {
        const y=10;
        console.log(y);
    }
    //console.log(y);  //y blocked -scoped
}
textconst()