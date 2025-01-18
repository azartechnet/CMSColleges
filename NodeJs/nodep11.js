const intervalid=setInterval(()=>{
    console.log('This will keep running until stopped')
},1000);
//stop after 5 seconds
setTimeout(()=>{
    clearInterval(intervalid);
    console.log('Interval cleared')
},5000)