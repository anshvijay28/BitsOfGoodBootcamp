fetch('https://reqres.in/api/users/3', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1',
        Job: 'Programmer'
    })
}) //fetch always resolves //can use res.ok to check success or not success
.then(res => {
    return res.json()
})
.then(data => console.log(data))
.catch(err => console.log("ERROR"))

/* program using async/await syntax
try {
    const response = await fetch('https://reqres.in/api/users/3')
    const responseAsJson = await response.json()
    console.log(responseAsJson)
} catch (err) {
    console.log(err);
}
*/