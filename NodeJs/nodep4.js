var f1=require('fs')
f1.rename('s1.txt','s2.txt',function(err){
    if(err) console.log(err);
    else
    {
        console.log("Renamed..")
    }
})