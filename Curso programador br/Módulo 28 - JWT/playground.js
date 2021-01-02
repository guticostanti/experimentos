const jwt = require('jsonwebtoken');

const user = {
    id: "20",
    name: "Joao",
    username: "joao@gmail.com",
    password: "123457"
}

const secret = "djnafvkdjansf345n3kj34f"

const token = jwt.sign({
    id: user.id,
    email: user.username
}, secret, {
    expiresIn: 20
})

console.log(token)

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwiZW1haWwiOiJqb2FvQGdtYWlsLmNvbSIsImlhdCI6MTYwOTYxNzMwMX0.2wpuAHU05qWqV0y_iS9oAafMqFRmMf49n0-ibOXqp5I"

// const validData = jwt.verify(token, secret)

// console.log(validData)