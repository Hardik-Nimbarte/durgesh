//{} it is scope 

let a=10
const b=40
var c=50
//inside the {} is called block scope
//outside the {}is called global scope global scope can be accessed inside the function
//but the block scope can not acccess out side the block 
if(true)
{
    let a=20
    const b=450
    var c=5030
}
console.log(a)
// console.log(b)
// console.log(c)