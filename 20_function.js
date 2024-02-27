//print all the elements (used the spread operator)
// function calculateCartPrice(...num1){
//     return num1
// }

//interview 
function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,300,500,800,700))

//object
const user={
    username:"Hardik",
    price:900
}
function handleObject(anyobject)//here anyobject can get called
{
      console.log('username is '+anyobject.username+' price is '+anyobject.price)
}
//handleObject(user)  we passed the object
//it can be done in anothe way 
handleObject({
    username:"cr7",
    price:100
})

//in case of array
const myNewArray=[200,400,500,1000]
function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))  this can be done by another way 
console.log(returnSecondValue([200,400,500,1000]))