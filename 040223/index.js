// let user={
//     fronent:[
//         {name:"name",salary:1600},
//         {name:"name,",salary:1000},
//     ],
//     mobile:{
//         android:[
//             {name:"tom",salary:2000},
//             {name:"tom",salary:2000},
//         ],
//         iso:[
//             {name:"tom",salary:2000},
//             {name:"tom",salary:2000},
//         ]
//     }
// }
// let res=0;

// const getCalc=function recursion(newuser){
//     Object.values(newuser).forEach((v)=>{
//         if(Array.isArray(v)){
//              let sum= v.reduce((pr,curr)=>pr+curr.salary,0)
//          res+=sum   
//         }
//         else{
//             getCalc(v);
//         }
//     })
// }
// getCalc(user)
// console.log(res);
// // console.log(arr.remove());





// let ar = [
//     { id: 1, name: "Ali", title: "ceo" },
//     { id: 2, name: "Vali", title: "teo" },
//     { id: 3, name: "Nodir", title: "ceo" },
//     { id: 4, name: "Eshmatjon", title: "teo" },
//     { id: 5, name: "Toshmatjon", title: "ceo" },
//     { id: 5, name: "Toshmatjon", title: "peo" },
//     { id: 5, name: "Toshmatjon", title: "cheo" },
//     { id: 5, name: "Toshmatjon", title: "peo" },
//     { id: 5, name: "Toshmatjon", title: "peo" },
//     { id: 5, name: "Toshmatjon", title: "meo" },
//     { id: 5, name: "Toshmatjon", title: "cheo" },
//   ];
  
//   let res = {};

// const sortTitle = (arr) => {
//   ar.forEach((v) => {
//     if (res[v.title]) {
//       res[v.title].push(v);
//     } else {
//       res[v.title] = [v];
//     }
//   });
// };

// sortTitle(ar);
// console.log(res)



let a=1;
let b=2;

let result;

// if(a+b<4){
//   result="below"
// }
// else{
//   result="Over"
// }


a+b<4? result="below":result="Over";
console.log(result);