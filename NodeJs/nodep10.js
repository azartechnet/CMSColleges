setInterval(()=>{
    const now = Date.now();
    const date = new Date(now);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    console.log(
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2,
            '0')}:${seconds.toString().padStart(2, '0')}`
    )

         

},2000)