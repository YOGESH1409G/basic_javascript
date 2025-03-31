//singleton= whwn we declare through literal singleton nahi banta hai.
//object.create()= isme singleton banta hai
// object literals

const mySym = Symbol ("yogesh")

const jsuser ={
    name: "yogesh" ,//yeh per kuch bhi de sakte hai string,array etc.
    "full name": "yogesh gupta",
    age:18,
    [mySym]: "gupta",
    email:"yogesh@gmail.com",
    isLoggedin : false,
    lastlogindays:["monday","tuesday"]
}
// object access karne k tarike

// console.log(jsuser.age)// 1 way
// console.log(jsuser["email"]) //2 way : this better cuz like "full name" we cannot access this through .operator we have to use 2 way.

// console.log(jsuser["full name"])

// console.log(jsuser.mySym);
// console.log(typeof (jsuser.mySym)); this is not the right way cuz the data type it shows that is string which is not correct cuz we wnt symbol.

// console.log(jsuser[mySym]) syntax yeh hota hai symbol ka jab usko hum object mein define karenge toh use karenge like [mySym]: anything;

// jsuser.email = "yogi@gmail.com"
// Object.freeze(jsuser.email) yeh freeze karde uske baad change nahi kar skate hum uss value ko.
// jsuser.age = 20
// console.log(jsuser)


jsuser.greeting = function(){
    console.log("hello my name is yogesh");
    
}

jsuser.greetingTwo = function() {
    console.log(`hello my name is, ${this.name}`)
}

console.log(jsuser.greeting())
console.log(jsuser.greetingTwo())



 

