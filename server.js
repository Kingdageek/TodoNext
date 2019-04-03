const express = require('express')
const next = require('next')
const td = require('./includes/todos')

// Indicates whether to launch next in dev mode
const dev = process.env.NODE_ENV !== 'production' // true

const app = next( { dev } )
const handle = app.getRequestHandler()

app.prepare().then( () => {
    const server = express()

    server.get('/api/todos', (req, res) => {
        res.status(200).send({
            success: 'true',
            message: 'Todos successfully retrieved',
            todos: td.todos
        })
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, err => {
        if (err) {
            throw err
        }
        console.log('> Ready on http://localhost:3000')
    })
})