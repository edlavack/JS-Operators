function getNumbers(){


// get the first value from the page
let num1 = document.getElementById("numberOne").value;

//get the second value from the page
let num2 = document.getElementById("numberTwo").value;

//try and convert numbers
 num1 = parseInt(num1);
 num2 = parseInt(num2);


 if (!Number.isInteger(num1) || !Number.isInteger(num2) ) {

    Swal.fire(
        { backdrop: false,
         title: 'JS Op',
         text: "You must enter a Number"
        }
     );
 }
    

     else{

        let sum = sumNumbers(num1, num2);
        let sub = subNumbers(num1, num2);
        let product = multiplyNumbers( num1, num2);
        let q = divideNumbers(num1, num2);
        let r = remainder(num1, num2);
        let addAll = addAllNumbers(num1, num2);
        let factorial = factorialNumbers(num1, num2);



        displayResults(sum, sub, product, q, r, addAll, factorial)


        console.log("add+"+sum);
        console.log("sub="+sub);
        console.log("product="+product);
        console.log("q="+q);
        console.log("r="+r);
        console.log("addAll"+addAll);
        console.log("factorial="+factorial);
       }
 }

 function displayResults(sumResult, subResult, pResult, qResult, rResult, allResult){


    let results = document.getElementById("results");
    results.innerHTML = "";

    let ptag = document.createElement("p");
    ptag.classList.add("pBlue")
    ptag.innerHTML = sumResult;
     
    let ptagSub = document.createElement("p");
    ptag.classList.add("pRed")
    ptagSub.innerHTML = subResult;

    let ptagProduct = document.createElement("p")
    ptag.classList.add("pProduct")
    ptagProduct.innerHTML = pResult;

    let ptagQ = document.createElement("p");
    ptag.classList.add("pQ")
    ptagQ.innerHTML = qResult;

    let ptagR = document.createElement("p");
    ptag.classList.add("pR")
    ptagR.innerHTML = rResult;

    let ptagAll = document.createElement("p");
    ptag.classList.add("pAll")
    ptagAll.innerHTML = allResult;


results.appendChild(ptag);
results.appendChild(ptagSub);
results.appendChild(ptagProduct);
results.appendChild(ptagQ);
results.appendChild(ptagR);
results.appendChild(allResult);


 }

function sumNumbers(number1, number2){

    let sum = number1 + number2;
    return sum;

}

function subNumbers(number1, number2){
    let sub = number1 - number2;
    return sub;
}

function multiplyNumbers( number1, number2){
let product = number1 * number2;
return product;
}

function divideNumbers(number1, number2){
    let q = number1 / number2;
    return q;
}

function remainder(number1, number2){
    let remainder = number1 % number2;
    return remainder;
}

function addAllNumbers(startNumber, endNumber){

 let sum = 0;   
for (let i = startNumber; i <= endNumber; i++) {
    sum = sum + i;
    
}
return sum;
}

function factorialNumbers(startNumber, endNumber){

let factorial = 1;
for (let i = startNumber; i <= endNumber; i++) {
   factorial = factorial * i;
    
}
return factorial
}

function getValue2(){
 //   let msg= '';
  //  msg=document.getElementById("message").value;

    
}