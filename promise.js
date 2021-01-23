const promise = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        reject('asdad')
    },1000)
})

promise.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log('Err'+err)
})