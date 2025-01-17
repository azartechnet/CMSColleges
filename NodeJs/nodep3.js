var f1=require('fs')
f1.open('s1.txt',function(err){
    if(err) console.log(err)
    else
{
    console.log("FileOpend...")
}
})