var fs=require('fs')
fs.writeFile('file1.txt',"welcome",function(err){
    if(err) {
        console.log(err);
        }
    else
    {
        console.log("file created");
    }
})
fs.readFile('file1.txt',function(err,d){
    if(err) {
        console.log(err);
    }
    else
    {
        console.log(d.toString());
    }
})