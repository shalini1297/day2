/* test('Create Todo should work fine',async()=>{
    const title =''
    const resp = await fetch('http://ec2-54-173-169-41.compute-1.amazonaws.com/todo-api-v12/v1/todo',{
        method: 'POST',
        body : JSON.stringify({
            title

        }),
        headers: {'content-type':'application/JSON'}

    })
    expect(resp.status).toBe(201)
    const body=await resp.json()
    expect(body.id).not.toBe(null)
    expect(body.createdAt).not.toBe(null)
    expect(body.updatedAt).not.toBe(null)
    expect(body.title).not.toBe(null)
    expect(body.status).not.toBe(null)

    const resp1 = await fetch('http://ec2-54-173-169-41.compute-1.amazonaws.com/todo-api-v12/v1/todo'+body.id)
}) */

type stringornumber = string|number
test('Create Todo should work fine',async ()=>{
    expect (squareRoot("16")).toBe(4)

})

test('Create Todo should work fine',async ()=>{
    expect (squareRoot(25)).toBe(5)

})

test('squareRoot of string is not a number',async ()=>{
    expect (squareRoot("abc")).toBe(1)

})

    function squareRoot(num:stringornumber){
        if(typeof num =='string'){
            return Math.sqrt(Number.parseFloat(num))
        } else{

            return Math.sqrt(num)
        }
    }




