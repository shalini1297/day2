import { test, expect } from '@playwright/test';
import { skip } from 'node:test';

/* test.skip ('creation of Todo should work', async ({ request }) => {

  //arrange
  const title = "playwright"

  //act
  const resp = await request.post('/todo-api-v12/v1/todo',{
    data:{
      title
    },
    headers:{
      'Content_Type': 'application/JSON'
    }
  })

  //assert
  expect(resp.status()).toBe(201)
  const body = await resp.json()
  expect(body.id).not.toBe(null)
  expect(body.title).toBe(title)

  const respSingle = await request.get(`/todo-api-v12/v1/todo ${body.id}`)
  const bodysingle = await respSingle.json()
  expect(bodysingle.id).not.toBe(null)
  expect(bodysingle.title).toBe(title)
}); */

/* test('multiple',()=>{
  expect(2*2).toBe(4)

}) */

/* test.describe ('Group 1',()=>{
  test('Addition',()=>{
    expect(1+1).toBe(2)

}) */
 /* test.skip ('subraction',()=>{
  expect(3-2).toBe(1)
 */
  test.describe (' update Todo',()=>{
    test.beforeEach(async({request},testinfo)=>{
      
      const title = 'ended the playwright'
      const todoresp = await request.post('/todo-api-v12/v1/todo',{
        data:{title},
         headers:{
          'content-type':'application/Json'
         }

      })
      testinfo['body'] = await todoresp.json()

    })
    test('Additional',async ({request}, testinfo)=>{
      const body = testinfo['body']
      const title = 'Changed title'
      const resp = await request.patch (`/todo-api-v12/v1/todo/${body.id}`,{
        data:{
          title
        },
        headers:{
          'content-type':'application/Json'
        }

      })
      expect (resp.status()).toBe(200)
    })

    test('status updated should work',async ({request}, testinfo)=>{
      const body = testinfo['body']
      const title = 'Changed title'
      const resp = await request.patch (`/todo-api-v12/v1/todo/${body.id}`,{
        data:{
          Status :'Done'
        },
        headers:{
          'content-type':'application/Json'
        }

      })
      expect (resp.status()).toBe(200)
    })

    test('Title updated should work',async ({request}, testinfo)=>{
      const body = testinfo['body']
      const title = 'updated title'
      const resp = await request.patch (`/todo-api-v12/v1/todo/${body.id}`,{
        data:{
          title
        },
        headers:{
          'content-type':'application/Json'
        }

      })
      expect (resp.status()).toBe(200)
    })
    //
   
  
  })
  test.afterEach (async ({request}, testinfo)=>{
    const body = testinfo['body']
    await request.delete (`/todo-api-v12/v1/todo/${body.id}`,{

    })


})
  
