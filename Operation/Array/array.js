// const myarray=[0,1,9,3,4,5,6,true,"sanjay"]
// console.log(myarray[4]);

// console.log(myarray);

// console.log(myarray.length);

// console.log(myarray[5]);


// myarray.push(9)
// myarray.pop()
// console.log(myarray);

// const myarray=[0,1,9,3,4,5,6,true,"sanjay"]

// console.log(myarray.indexOf("sanjay")); //output 8

// console.log(myarray.includes("sanjay")); //output true



// console.log(myarray.includes(true)); //output true



const myarray1=[1,2,5,6,7,8,2]
console.log(myarray1);

// const myarray2=myarray1.slice(1,5)
// console.log("A " + myarray1);  //A 1,2,5,6,7,8,2   oringinal array not changed
// console.log("Output "+myarray2);   //Output 2,5,6,7

const myarray2=myarray1.splice(1,5)
console.log("A " + myarray1);  //A 1,2  oringinal array was changed
console.log("Output "+myarray2);  //Output 2,5,6,7,8