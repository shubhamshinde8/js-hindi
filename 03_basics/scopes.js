console.log("scopes in js ");

// let a=300;
// let b=100;
// let c=98;

// if(true){
//     let a=10;
//     console.log("inner a : "+a);
// }

// console.log("outer a : "+a);


function one(){
    const userName="hitesh";
    two();

    function two(){
        const website="youtube";
        console.log(userName);
    }

    // console.log(website);
}

one();