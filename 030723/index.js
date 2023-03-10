// let user = {
//     name: "John",
//     age: 30
//   };
  
//   user.sayHi = function() {
//     console.log("Hello!");
//   };
  
//   user.sayHi(); // Hello!

// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       console.log(user.name); // "user" instead of "this"
//     }
  
//   };
let obj ={
    user:"m",
    name:"s"
}

for (v in obj){
    let{v}=obj;
}