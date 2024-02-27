//scope in the function can be easily understandable by the example of ice cream 
//small one can ask for the ice cream from big one but
//big one cant ask icecream  from the small one 
//this same idology is in the ifelse condition also

function one(){
    const username ="hitesh"
    
    function two()
    {
        const website="youtube"
        console.log(username)
    }
    //console.log(website)

    two()
}
//one()

if(true)
{
    const username="hardik"
    if(username==="hardik")
    {
        const website="youtube "
        console.log(username + " "+website)
    }
    //console.log(website) we cant use website outside the if statement that is inside 
    //the if statement 
}
//console.log(username)


//+++++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++=

console.log(addone(5))  //this will not give error
function addone(num)
{
    return num+1
}

//this is the difference between the way of initializing the function
    
addTwo()//cannot access addtwo before intialization
const addTwo=function(num){
    return num+2
}

