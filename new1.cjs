const input = require('readline-sync');
// import input from 'readline-sync'

// var arr1 = [1,3,4,5,7];
// var arr2 = [2,3,4,7];
// var arr3=[...arr1,...arr2]
// var a=[];
// for(i of arr3){
//     if(! arr2.includes(i)){
//         a.push(i)
//     }else if(! arr1.includes(i)){
//         a.push(i)
//     }
// };
// console.log(a);


// question  number =2
// var arr1 = [1,3,4,5,7];
// var arr2 = [2,3,4,7];
// let a=[...arr1,...arr2];
// let uni=[];
// let d=[];
// let m=[];
// for (i of a){
//     if(!uni.includes(i)){
//         uni.push(i);
//     }
// }
// console.log(uni);
// for (j of uni){
//     count=0;
//     for (k of a){
//         if(j===k){
//             count++;
//         }
//     }
//     if(count>1){
//         d.push(j);
//     }else{
//         m.push(j);
//     }
// };
// console.log(d);
// console.log(m)

// pear of 30
// var n = [10, 11, 12, 13, 14, 17, 18, 19];
// let number=30;
// let output=[];
// for (i of n){
//     for (j of n){
//         if(i+j===number){
//             output.push([i,j]);
//         }
//     }
// }
// console.log(output);



// find unique value in one array 
// let a=[1,1,2,2,3,3,4,4,5];
// let u=[...new Set(a)];
// console.log(u);


// find unique value in one array
// function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
// }
// let m=[1,1,2,2,3,3,4,4,5];
// var unique = m.filter(onlyUnique)
// console.log(unique); 

// date 15;9;2022 
// Questin number 1 flatten array
// const flatten=(arr)=>{
//     const result=[];
//     for(let i of arr){
//         if(Array.isArray(i)){
//             result.push(...flatten(i))
//         }else{
//             result.push(i)
//         }
//     }
//     return result;
// }
// const nested=[9,2,3,[3,[6,7,[4,5,[6,3],[8,1],[10]]]]];
// const data=flatten(nested);
// console.log(data);


// question number =.2 tebal in one line 
// let num=input.questionInt("Please enter your number => ")
// for(let i=1;i<=10;i++){
//     var s='';
//     for (let j=num;j>=1;j--){
//         s=s + j + "*" + i + "=" + (j*i) + '\t'
//     }
//     // console.log("*************")
//     console.log(s);
// }

// question number 3 anagram
// const anagram=(s1,s2)=>{
//     const sp1=s1.split('').sort().join('')
//     const sp2=s2.split('').sort().join('')
//     // console.log(sp1,'\n',sp2);
//     if(sp1===sp2){
//         console.log('This string are anagram ;');
//     }else {
//         console.log('This string are not anagram ;');
//     }
// }
// const str1=input.question('Please enter your String => ');
// const str2=input.question('Please enter your second String => ')
// anagram(str1,str2)

// const anagram=(s1,s2)=>{console.log((s1.split('').sort().join('')===s2.split('').sort().join('') ?'This string are anagram ;':'This string are not anagram ;'))}
// anagram(input.question('Please enter your String => '),input.question('Please enter your second String => '))



// console.log('add 0 last index');
// const arr=[0,5,0,8,7,6,0,0,4];
// const s=arr.sort()
// const r=arr.reverse()
// console.log(r);


// suffle array  
// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// list = list.sort(() => Math.random() - 0.5)
// console.log(list);