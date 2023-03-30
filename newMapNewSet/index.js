


// let user = new Map();
// user.set("name", "John");
// user.set("age", "30");

// console.log(user);
// Map iterates as [key, value] pairs, very convenient for destructuring
// for (let [key, value] of user) {
//   console.log(`${key}:${value}`); // name:John, then age:30
// }



// let options = {
//     title: "Menu",
//     height: 200,
//     width: 100
//   };
  
//   // title = property named title
//   // rest = object with the rest of properties
//   let {title, ...rest} = options;
  
//   // now title="Menu", rest={height: 200, width: 100}
//   console.log(rest);  // 200
//   console.log(rest);   // 100


// let arr=["apple",["salom","bir"],"mno"];

// let [bir,[ikki,tort],uch]=arr;

// console.log(bir);
// console.log(ikki);
// console.log(tort);
// console.log(uch);

// let obj={
//     name:"muhammad",
//     child:{name:"Abdulloh"}
// }

// let {name,child,child:{name:newName},age}=obj;

// console.log(name);
// console.log(child);
// console.log(newName);


// let ar=[1,3,4,5];
// let json=JSON.stringify(obj);

// console.log(json);


// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room // meetup references room
//   };
  
//   room.occupiedBy = meetup; // room references meetup
  
//   console.log( JSON.stringify(meetup, ['title', 'participants',4]) );
//   // {"title":"Conference","participants":[{},{}]}


// let john = { name: "John" };

// let array = [ john ];

// john = null; // overwrite the reference

// console.log(john);
// console.log(array[0]);


// let john = { name: "John" };

// let map = new Map();
// map.set(john, "...");

// john = null; // overwrite the reference

// console.log(john);
// console.log(map);


let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add("name");
set.add("pete");
set.add("mary");

console.log(set.delete("name"));



// // let arr=[2,4,56,7];


// // console.log(arr.slice(1));

// // let n="Muhammad"

// // let ar=[1,2];

// // arr.concat(ar);
// // console.log(arr);

// // let num=[1,4,5,6,7];

// // let sum=num.reduce((prev,cur)=>prev+cur,0)
// // console.log(sum);


// const array1 = [1, 2, 3, 4];

// // Fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// // Expected output: Array [1, 2, 0, 0]

// // Fill with 5 from position 1
// console.log(array1.fill(5, 1));
// // Expected output: Array [1, 5, 5, 5]

// console.log(array1.fill(6));
// // Expected output: Array [6, 6, 6, 6]



// let user = {
//     name: "John",
//     age: 30
//   };

//   console.log(Object.entries(user));
  
//   // loop over keys-and-values
//   for (let [key, value] of Object.entries(user)) {
//     console.log(`${key}:${value}`); // name:John, then age:30
//   }
