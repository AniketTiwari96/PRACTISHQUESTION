const input=require('readline-sync')

// how to remove spesh from string 
// let str='       my name is aniket tiwari         '
// let arr=str.split(' ')
// let res=''
// for(let i of arr){
//     if(i==''){
//         delete [i]
//     }else{
//         res+=i+' '
//     }
// }
// console.log(res);


// how to remove duclicate value without another Array
// let arr=[1,5,2,2,4,7,8,8,1];
// let res=arr.filter((value,index)=>{
//     let a=arr.indexOf(value)===index
//     return a
// })
// console.log(res);




// how to make febonaci pattern 
// let range=input.questionInt('enter your range => ')
// let a=0
// let b=1
// let c=a+b
// let p=''
// for(let i=1;i<=range;i++){
//     for(let j=1;j<=i;j++){
//         p+=" "+c
//         c=a+b
//         a=b
//         b=c
//     }
//     p+='\n'
// }
// console.log(p);


// let rang = input.questionInt('enter your range  =>')
// let a=0
// let b=1
// let c=a+b
// let res = ''
// for (let i=1;i<=rang;i++){
//     for(let j=1;j<=i;j++){
//         res+=" "+c
//         c=a+b 
//         a=b
//         b=c
//     }
//     res+='\n'
// }
// console.log(res);

// let arr = [0,2,3, 4,50,0,5,0,6,0,0, ,4,0]
// let res1=[]
// let res2 = []
// for (let i of arr){
//     if(i>0){
//         res1.push(i)
//     }
//     else if(i==undefined){
//         continue
//     }else{
//         res2.push(i)
//     }
// }
// tres = [...res1,...res2]
// console.log(tres);

// how to make febonacciy series 
// a = 0;
// b = 1;
// c = 0;
// while (c<=10){
//     console.log(c);
//     a=b
//     b=c
//     c=a+b
// }

// const num=input.questionInt("please enter your number :");
// var p="";
// for(i=1;i<=num;i++){
//     for(j=1;j<=num-i;j++){
//         p+="-";
//     }for(j=1;j<=i;j++){
//         p+=j;
//     }for(j=i-1;j>=1;j--){
//         p+=j;
//     }
//     p+='\n';
// };
// console.log(p);




// let ran = input.questionInt('enter your range =>')
// let res = ''
// for (let i=1;i<=ran;i++){
//     for(let j=1;j<=ran-i;j++){
//         res+=' '
//     }
//     for(let j=1;j<=i;j++){
//         res+=j
//     }
//     for(let j=i-1;j>=1;j--){
//         res+=j
//     }
//     res+='\n'
// }
// console.log(res);

// const num=input.questionInt("please enter your number :");
// var p="";
// for (let i=1;i<=num;i++){
//     for(let j=1;j<=i;j++){
//         p+=i;
//     }
//     p+="\n";
// }
// console.log(p);

// const str='   navgurukul   ';
// console.log(str.split(' ').join(''));

// const num=1234;
// var str=num.toString();
// let sum = 0
// for(let i of str){
//     sum+=Number(i)
// }
// console.log(sum);


// console.log(String.fromCharCode(65,110,105,107,101,116,32,84,105,119,97,114,105));


// let arr = ['b' , 'd', 'a', 'c' , 'e']
// let arr = [5,4,3,2,1]
// let res = arr.sort()
// console.log(res);


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

// how to remove dublicated 
// let a=[1,1,2,2,3,3,4,4,5];
// let u=[...new Set(a)];
// console.log(u);


// question number =.1 tebale
// let num=input.questionInt("entre number: ");
// for(let i=1;i<=10;i++){
//     var s='';
//     for (let j=1;j<=num;j++){
//         s=s + j + "*" + i + "=" + (j*i) + '\t'
//     }
//     console.log(s);
// }

// let ran = input.questionInt('enter your range =>')
// for(let i=1;i<=10;i++){
//     let s=''
//     for(let j=1;j<=ran;j++){
//         s=s + j + "*" + i + "=" + (j*i) + '\t'
//     }
//     console.log(s);
// }


// how to create object 
// let obj=new Object();
// obj.name="Aniket Tiwari";
// obj.salary=1234;
// obj.age=12;
// console.log(obj);
// console.log("name" in obj);

// how ot make array 
// let arr=new Array(1,2,3,4,5);
// console.log(arr);

// console.log("snake pattern in javascript :");
// function createGrid(length,height) {
//     var lednum = 1;
//     var grid = [];
//     for (var row = 0; row < height; row++) {
//         grid[row] = [];
//         for (var col = 0; col < length; col++) {
//             if ((row % 2) === 0) {
//                 grid[row].push(lednum);
//             } else {
//                 grid[row].unshift(lednum);
//             }
//             lednum++;
//         }
//     }
//     return grid;
// }
// console.log(createGrid(5, 5))


// // console.log("ckek balance baraket;");
// function inbalanced(st){
//     let arr=[];
//     let openingbreckets={
//         '(':')',
//         '{':'}',
//         '[':']'
//     };
//     let closingbreakets={
//         ')':true,
//         '}':true,
//         ']':true
//     };

//     for(let i=0;i<=st.length;i++){
//         const  item=st[i];
//         if(openingbreckets[item]){
//             arr.push(item);
//         }else if(closingbreakets[item]){
//             if(openingbreckets[arr.pop()]!==item) return false;
//         }
//     };
//     return arr.length==0;
// };
// let strr="{()}"
// // let strr="{()[]}";
// // let strr="{{}()";
// console.log(inbalanced(strr));



// for(let obj={i:1};obj.i<5;obj.i++) {
//     setTimeout(function() {
//         console.log(obj.i)
//     },obj.i*1000)
// }


// how to sort array without using sort methode in JS
// let arr=[44,36,8,9,6,9,4,9,88,8,666,8,3,5,7];
// for(let i=0;i<arr.length;i++){
//     for(let j=i;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             t=arr[i];
//             arr[i]=arr[j]
//             arr[j]=t;
//         }
//     }
// }
// console.log(arr);
// console.log(arr.at(-2));


// let arr=['q','x','z'];
// // // output['q1','q2','q3','x1','x2','x3','z1','z2','z3']
// let res = []
// for(i of arr){
//     for(j=1;j<4;j++){
//         res.push(i+j)
//     }
// }
// console.log(res);

// big element ko pahale kaise print kare 
// let arr=['aniket','raja','bhumesh','kumar']
// let d2={};
// let li=[]
// let d={}
// for(let i of arr){
//     li.push(i.length)
//     d[i]=i.length;
// }
// li.sort().reverse()
// console.log(li);
// for(let len of li){
//     for(let ele in d){
//         if(d[ele]==len){
//             d2[ele]=len
//         }
//     }
// }
// console.log(d2);


// how to remove given target in array 
// const arr = [5,2,9,6];
// let n=6
// for (let i of arr){
//     if(i==n){
//         arr.pop(i)
//     }
// }
// console.log(arr);

// let array=[10,20,10,40,30,20,10,50,60,70]
// let p=[]
// for(i=0;i<array.length;i++){
//     if (array[i]+array[i+1]===50){
//         p.push([i,i+1])
//     }
// }
// console.log(p);

// how to make pair of index number to sum of 50
// let array=[10,20,10,40,30,20,10,50,60,70]
// let toSum=50
// let pair=[]
// for(let i = 0; i < array.length; i++) {
//     if(array[i] + array[i + 1] === toSum) {
//     pair .push([array[i],array[i+1]]);
//     }
// }
// console.log(pair);

// synchronoush and asynchronous in javascript
// synchronoush
// let fun2=()=>{
//     console.log("My last name is Tiwari :");
// }
// let fun1=()=>{
//     console.log("My first name is Aniket :");
//     fun2();
//     console.log("And my full mame is Aniket Tiwari :");
// };
// fun1();

// //Asynchronoush 
// let fun2=()=>{
//     setTimeout(()=>{
//         console.log("My last anme is Tiwari :");
//     },5000)
// }
// let fun1=()=>{
//     console.log("My first name is Aniket :");
//     fun2();
//     console.log("My full name is Aniket Tiwari :");
// };
// fun1();

// how to print roman to integer 
// const toRoman = (num, result = '') => {
//     const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,  L: 50,  XL: 40,  X: 10,IX: 9,   V: 5,   IV: 4,   I: 1, };
//       for (const key in map) {
//         if (num >= map[key]) {
//           if (num !== 0) {
//             return toRoman(num - map[key], result + key);
//           }
//         }
//       }
//       return result;
//     };
// console.log(toRoman(5));


// how to print integer to roman 
// let num=input.questionInt('enter your enteger number => ')
// var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
// let roman=''
// for(let i in lookup){
//     if(num>lookup[i]){
//         roman+=i
//         num-=lookup[i]
//     }
// }

// console.log(roman);


// how to count deublicate value and remove dublicate value;
// let str='aniket tiwari'
// let arra=str.split('')
// console.log(arra);
// let array=[1, 2, 2,-2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6,];
// let object={};
// for(let item of array){
//     if(!object[item]){
//         object[item]=0
//     }
//     object[item]+=1
// }
// console.log(object);


// how to make leep year
// const arr=[2000, 2004,  2100, 2200, 2500,2300,2008, 2012, 2016, 2020,2300, 2024, 2028];
// console.log(arr);
// for(let year of arr){
//     if(year%4===0){
//         if(year%100===0){
//             if(year%400===0){
//                 console.log('this is leep year ;');
//             }else{
//                 console.log('this is not leep year ;');
//             }
//         }else{
//             console.log('this is leep year ;');
//         }
//     }else{
//         console.log('this is not leep year ;');
//     }
// }



// how to find second max number from array 
// let arr = [12, 35, 12,1, 10, 34, 1]
// let max = 0, second = 0;
// for(let i = 0; i <= arr.length; i++){
//     if(max<arr[i]){
//         second = max;
//         max = arr[i];
//     }
//     else if( second<arr[i] && arr[i] != max){
//         second = arr[i];
//     }
// }
// console.log(max);
// console.log(second);


// how to do upper every first charector 
// let s='my name is aniket tiwari';
// let arr = s.split(" ");
// for(let i = 0; i < arr.length;i++){
// arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
// }
// console.log(arr.join(' '));


// how to print snake pattern 
// var lednum = 1;
// var grid = [];
// for (var row = 0; row < 5; row++) {
//     grid[row] = [];
//     for (var col = 0; col < 5; col++) {
//         if ((row % 2) === 0) {
//             grid[row].push(lednum);
//         } else {
//             grid[row].unshift(lednum);
//         }
//         lednum++;
//     }
// }
// console.log(grid);


// console.log("question nimber 2. revese string our place ")
// var s="i am aniket tiwari";
// let a=(s.split(" "));
// var arr=[];
// for (i of a){
//     c='';
//     for(j of i){
//         c=j+c;
//     };
//     arr.push(c);
// }
// console.log(arr.join(' '));


// let a=[1,3,4,5,6];
// m=[];
// for(let i=1; i<=a.length;i++){
//     if(a.indexOf(i)===-1){
//         m.push(i);
//     };
// };
// console.log("missing number",m)


// question no3. how to print prime number 
// for(let i=1;i<10;i++){
//     let a=0;
//     for(let j=2;j<i;j++){
//         if(i%j===0){
//             a=1;
//             break;
//         }
//     }
//     if(i>1 && a===0){
//         console.log(i);
//     };
// };

// falleten list to singel list 
// let arr=[1,2[3,4[5,6]],7,8[9,[10]]];
// function flatten(arr){
//     const result=[];
//     for(i of arr){
//         if(Array.isArray(i)){
//             result.push(...flatten(i));
//         }else{
//             result.push(i);
//         }
//     }
//     return result;
// }
// const nested=[1,2,[3,[6,3,[4,5,[6,7],[8,9],[10]]]]];
// console.log(flatten(nested));

// / how to convert lower to upper and apper to lower
// let str='my namE is anikET tiWari';
// let len=str.length;
// let result='';
// for(let i=0;i<len;i++){
//     if(str[i]===str[i].toLowerCase()){
//         result+=str[i].toUpperCase();
//     }else{
//         result+=str[i].toLowerCase();
//     }
// };
// console.log(result)




// question no2. how to cheak prime number 
// const num=input.questionInt('enter your numer => ')
// let i=2;
// let c=0;
// while(i<num){
//     if(num%i===0){
//         c+=1;
//     }
//     i++;
// }
// if(c===0){
//     console.log('prime');
// }else{
//     console.log('not prime');
// }

// question no 1. What is angram 
// const anagram=(str1,str2)=>{
//     const an1=str1.split('').sort().join('')
//     const an2=str2.split('').sort().join('')
//     if(an1===an2){
//         console.log('this is anagram ;');
//     }else{
//         console.log('this is not anagram ;');
//     }
// }
// const str1=input.question('enter your first values => ');
// const str2=input.question('enter your second values => ')
// anagram(str1,str2)


// setTimeout(()=>{
//     console.log('hello world');
//     for(i=1;i<6;i++){
//         console.log(i);
//     }
// },2000)

// let s=setInterval(()=>{
//     console.log('hello world');
//     for(i=1;i<6;i++){
//         console.log(i);
//     }
// },2000)
// clearInterval(s)



// // callback function 
// const fun1 = (callback)=>{
//     setTimeout(()=>{
//         console.log('this is first function ');
//         callback()
//     },3000)
// }
// const fun2 = ()=>{
//     console.log('this is fun2');
// }
// fun1(fun2)