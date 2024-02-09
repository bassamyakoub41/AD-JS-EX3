


// ________functions ex___________

//ex 1

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Do you have your parents permission to access this page?');
//     }
//   }

// let checkAge=age=>(age>18) ? true : confirm('Do you have your parents permission to access this page?');
//  let result=checkAge(12)
//  console.log(result)

//ex2
// let pow = (x,n)=> x<1 ? "add a valid number" : x**n;
// console.log(pow(3,4))

// ex3

    
//   let ask=(question , yes , no)=>{
//     if (confirm(question)) yes()
//     else no()
// };
  
//   ask(
//     "Do you agree?",
//     ()=> { alert("You agreed.") },
//     ()=> { alert("You canceled the execution.") }
//   );

// ex4
// let calculator = {
//     read(a,b){
//        this.a=parseFloat(prompt('Enter a first number')) 
//        this.b=parseFloat(prompt('Enter a second number')) 
//     },

//     sum(){
//         return this.a+ this.b
//     },
//     multiply(){
//         return this.a*dthis.b
//     }

// }
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.multiply() );

// ex5
// let min=(a,b)=> a>b ? b : a<b ? a : 'change one of them and try again';
// console.log(min(6,2))