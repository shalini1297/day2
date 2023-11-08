
 async function createTodo(body:{title:string,status?:string}){
    console.log("test")
    const res = await fetch('http://ec2-54-173-169-41.compute-1.amazonaws.com/todo-api-v12/v1/todo',{
        method:"POST",
        body : JSON.stringify (body),
        headers: {
            "Content-Type": "application/json"
        }

    })
   return await res.json();

}

// (async() => {
//     for(var i =0 ; i<2 ;i++){
//         const resp = await createTodo( {title :`Shalini test ${i}`,status:"DONE"})
//         console.log("res", resp)
//         }
// })()

async function init() {
    for(var i =0 ; i<2 ;i++){
        const resp = await createTodo( {title :`Shalini test ${i}`,status:"DONE"})
        console.log("res", resp)
        }
}

init()
