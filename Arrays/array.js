// // console.log("arrays dsa")

const obj = {a: 1,b: {c: 2,d: {e: 3}}};

// function flattenObject(obj, parentKey, result={}){
//     for (let key in obj){
//         const newKey = parentKey?`${parentKey}.${key}`: key;
//         if(typeof obj[key] === "object" && obj[key] !==null){
//          flattenObject(obj[key], newKey, result);
//         }
//         else{
//             result[newKey] = obj[key]
//         }
//     }
//     return result
// }
// const nums = flattenObject(obj);
// console.log(nums)


// function flattenObj ( objs, parentKey="", result={} ){

//     for(let key in obj){
//         const newKey = parentKey ? `${ parentKey}.${key}`: key 
//         if(typeof obj[key] === "object" && obj[key] !==null){
//             flattenObj(obj[key], newKey, result)
//         }
//         else{
//             result[newKey] = obj[key]
//         }
//     }
//     return result
// }

// const numsy = flattenObj(obj);
// console.log(nums)

// function falttenObjcts(obj, parentKey="", result={}){
//     for(let key in obj){
//         const newKey = parentKey ?`${parentKey}.${key}`: key
//         if(typeof obj[key]==="object" && obj[key] !==null){
//             falttenObjcts(obj[key], newKey, result )
//         }
//         else{
//             result[newKey] = obj[key]
//         }
//     }
//     return result
// }

// const flattenNums = falttenObjcts(obj);
// console.log(flattenNums)


// for(let i=0;i<=5; i++){
//     console.log("hello world");
// }

// function isNumOdd(x){
   
//     if(x%2 === 0){
//         console.log("number is even number here")
//     }
//     else{
//        console.log("number is odd number here")
//     }
   
// }

// const nums = isNumOdd(126);

// for(let i = 5 ; i<=6; i++){
//     console.log("hello world")
// }

// const array = [1,2,3,4,5,6,7];
// function findEvenNums(){
//     let evenNums = 0;
//     for(let i =0; i<array.length; i++){
//         if(array[i]%2===0){
//             }
//         }
//     return evenNums 
// }
// const nums = findEvenNums(array);

const arr = [1,1,2,2,2,3,3,4,4,4,5,5,6,7]
let x =0
function findDuplicates(){
for (let i = 0; i<arr.length; i++){
   if(arr[i]>arr[x]){
    x=x+1;
    arr[x]= arr[i]
   }
   

}
return x+1
}

const nums = findDuplicates();
console.log(arr.slice(0,nums))