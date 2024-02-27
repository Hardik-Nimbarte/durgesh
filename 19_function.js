function sayMyName(){
    console.log("Hardik")
}
sayMyName()

// function addTwoNumbers(a,b)//here the values inside the paranthesis are parameters
// {
//     console.log(a+b)
// }
function addTwoNumbers(a,b)
{
   let result=a+b
   return result
}
//addTwoNumbers(3,4)//value inside ()are called as arguments
const Result=addTwoNumbers(3,4)
console.log("Result: ",Result)

function loginUserMessage(username="sam")//here we set the by default value sam
                                        //it means the  (!usename )value will never print
{
    if(!username){     //(username===undefined) is same as (!username)
        console.log("please enter the username ")
        return
    }
    return username + ' just logged in '
}
//console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())