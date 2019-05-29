//Training JS: Codewars Katas:


//Kata #1:  JS function helloWorld

function helloWorld(){
  var str = "Hello World!";
  console.log(str);
};


//Kata #2:  Basic data types--Number

var v1=50, v2=100, v3=150, v4=200, v5=2, v6=250;

function equal1(){
  var a=v1
  var b=v1
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a= v3;   //set number value to a
  var b= v1;  //set number value to b
  return a-b;
}
function equal3(){
  var a= v1;  //set number value to a
  var b= v5;  //set number value to b
  return a*b;
}
function equal4(){
  var a= v4;  //set number value to a
  var b= v5;  //set number value to b
  return a/b;
}
function equal5(){
  var a=  v6; //set number value to a
  var b=  v3; //set number value to b
  return a%b;
}


//Kata #3:  Basic data types--String

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  var papa = d1+a2+d2;
  return papa;
}
function Bee(){
  //select some variable to combine "Bee"
  var buzz = b1+e2+e2;
  return buzz;
}
function banana(){
  //select some variable to combine "banana"
  var monkey = b2+a2+n2+a2+n2+a2;
  return monkey;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}


//Kata #4: Basic data types--Arrays
/*Training JS #4:
Basic data types--Array

In javascript, Array is one of basic data types. Define an empty array can use var arr=new Array() or var arr=[]

Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.

Each element in the array has an index, use arr[index] to get the value of element.

index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].

If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:

var arr=[1,2,3];     //define an array arr contains elements 1 2 3
arr.push(4);         //add element 4 to arr
console.log(arr)     //[1,2,3,4]
arr.pop();           //remove the last element from arr
console.log(arr)     //[1,2,3]
#Task
I've written five function, each function receives a parameter: arr(an array), you should coding something with arr.
    1. getLength(arr)    should return length of arr
    2. getFirst(arr)     should return the first element of arr
    3. getLast(arr)      should return the last element of arr
    4. pushElement(arr)  should push an element to arr, and then return arr
    5. popElement(arr)   should pop an element from arr, and then return arr
When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.
*/

function getLength(arr){
  //return length of arr
  return arr.length;
}
function getFirst(arr){
  //return the first element of arr
  return arr[0];
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1];
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el);
  return arr;
}
function popElement(arr){
  //pop an element from arr
  arr.pop();
  return arr;
}




//Kata #5:




// =======================================

//*** OTHER CODE CHALLENGES **//

// Codility demo challenge:

/*
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

*/


// Function for returning smallest positive number not contained in an array.
function solution(A) {
    // iterate through array
    for(i=1; i<1000000; i++){
        // if i is not included in A, return that value
        if(!A.includes(i))
        return i;
    }

}

//complecity O(N^2). Try to make more efficient for very large/negative containing arrays!

/*
Test results:

▶ large_1
chaotic + sequence 1, 2, ..., 40000 (without minus) ✘TIMEOUT ERROR
running time: 1.78 sec., time limit: 0.45 sec.
1. 1.784 s TIMEOUT ERROR,  running time: 1.78 sec., time limit: 0.45 sec.

▶ large_2
shuffled sequence 1, 2, ..., 100000 (without minus) ✘TIMEOUT ERROR
running time: >6.00 sec., time limit: 0.46 sec.
1. 6.000 s TIMEOUT ERROR,  running time: >6.00 sec., time limit: 0.46 sec.
2. 5.252 s TIMEOUT ERROR,  running time: 5.25 sec., time limit: 0.46 sec.

▶ large_3
chaotic + many -1, 1, 2, 3 (with minus) ✘TIMEOUT ERROR
running time: 1.10 sec., time limit: 0.43 sec.
1. 1.100 s TIMEOUT ERROR,  running time: 1.10 sec., time limit: 0.43 sec.

*/

// =======================================
