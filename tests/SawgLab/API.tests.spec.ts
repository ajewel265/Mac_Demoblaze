// data: {} means sending a request body, {} contains data (JSON format)
import { test, expect } from '@playwright/test';

test('API DELETE Request', async ({ request }) => {

    const response = await request.delete("https://reqres.in/api/users/2")
    expect(response.status()).toBe(204)

})

test('API PUT Request', async ({ request }) => {
    const response = await request.put("https://reqres.in/api/users/2", {
        data: {
            name: "Assad",
            job: "QA"
        }
    })
    expect(response.status()).toBe(200)
    const text = await response.text()
    expect(text).toContain("Assad")
    console.log(await response.json())

})

test('POST Request', async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users", {

        data: {
            name: "Jewel",
            job: "Tester"
        }
    })
    expect(response.status()).toBe(201)
    const text = await response.text()
    expect(text).toContain("Jewel")
    console.log(await response.json())

})

test('API GET Request', async ({ request }) => {

    const response = await request.get("https://reqres.in/api/users/2")
    expect(response.status()).toBe(200)
    const text = await response.text()
    expect(text).toContain("Janet")
    console.log(await response.json())
})