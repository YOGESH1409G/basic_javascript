// primitive
// 7 types: string,number, boolean, null(empty), undefined, symbol, BigInt


// 2 datatype: reference type/ non- premitive type
// all non-premitive typeof value give object

//Array, objects , function

// typeof value of  null is: Object

//stack(primitive),heap(non-primitive)

let myname ="yogesh"

let anothername= myname
anothername="yogesh gupta"

// console.log(myname); yogesh
// console.log(anothername); yogesh gupta

let idcard ={
    name: "yogesh",
    upi: "23bcs@ybl"
}

let idcardsec = idcard

idcardsec.name = "yogesh gupta"

// console.log(idcard.name); yogesh gupta
// console.log(idcardsec.name);yogesh gupta



 