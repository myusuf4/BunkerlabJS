// let user=[
//     {id:1,name:"Muhammad",year:2000},
//     {id:2,name:"Solih",year:2002},
//     {id:3,name:"Muhiddin",year:1993},
//     {id:4,name:"Abdulloh",year:2001},
//     {id:5,name:"Abdurrohman",year:1999},
//     {id:6,name:"Mustafo",year:1999},
//     {id:7,name:"AbuBakr",year:2001},
// ];

// const sortByYear=()=>{
//     let res=user.sort((a,b)=>a.year-b.year)
//     return res
// }
// console.log(sortByYear());


// const sortByName=()=>{
//     let res=user.sort((a,b)=>a.name.localeCompar(b.name))
//     return res
// }
// console.log(sortByName());

//delete

//     const deleteUser=(id)=>{
//         let res =user.filter((v)=>v.id!==id)
//         return res
//     }
//   console.log(  deleteUser(4));

//      const addUser=(newuser)=>{
    //         user=[...user],{...newuser};
    //         console.log(user);
    //     }
    //   addUser({name:"Umar",year:2001});
    

let user=[
        {id:1,name:"Muhammad",year:2000},
        {id:2,name:"Solih",year:2002},
        {id:3,name:"Muhiddin",year:1993},
        {id:4,name:"Abdulloh",year:2001},
        {id:5,name:"Abdurrohman",year:1999},
        {id:6,name:"Mustafo",year:1999},
        {id:7,name:"AbuBakr",year:2001},
    ];

// const update=(data)=>{
//     let res = user.map((v)=>v.id===data.id?{...v,[data.type]:data.value}:v)
//     return res;
// }
// console.log(update({id:2,type:"name",value:"Usmon"}));


// // console.log([1]===true);
// // let num=[14,1,5,7,false];
// // console.log(num.reverse());
// // console.log(num);

// // let res=num.filter((value,index,array)=>index)
// // console.log(res);











// // let obj=[
// //     {name:"Muhammad",year:2002},
// //     {name:"Muhammad",year:2003},
// //     {name:"Muhammad",year:2004},
// //     {name:"Muhammad",year:2002},
// //     {name:"Muhammad",year:2004},
// //     {name:"Muhammad",year:2001},
// // ]
// // let res=obj.sort((v)=>v.year==2002?v.ball=5:obj)
// // console.log(res);


// // console.log(isNaN("2"));
