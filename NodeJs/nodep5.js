var f1=require('fs')
//Asynchrous Read
/*f1.readFile('s2.txt',function(err,data){
    if(err) console.log(err)
    else
{
     console.log("Your data is::"+data.toString())
}
})*/
//Synchrous Read
var data=f1.readFileSync('s2.txt')
console.log(data.toString())