const arr=[10,20,30,40,78,3,4];

let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}

console.log("Maximum Elements in Arrays ",max);
