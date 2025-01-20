// console.log("Arrays in javascript ");

// const myArr=[1,2,3,4,5,6];
// console.log(myArr);


// myArr.push(7);

// console.log("After Pushing..");

// console.log(myArr);

// myArr.pop();
// console.log(myArr);


// Reverse an Array

const arr=[1,2,3,4,5];
let i=0;
let j=arr.length-1;
while(i<j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
}

console.log(arr);