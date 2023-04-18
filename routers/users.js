const express = require('express')
// const format = require('pg-format')
const router = express.Router()
const pool = require('./../database')

const users = require('./../modules/users')

router.get('', async function (req, res) {
    // console.log(req.userId)
    value = users.getUsers()
    .then(
        (value) => {
            res.json({ data: value })
        }, (error) => {
            res.json({ error: error.toString() }, 404)
        }
    ).catch((error)=> {
        res.json({ error: error.toString() }, 404)
    })
})

router.post('', function (req, res) {
    users.postUser('username', 'password', 'name', 'email').then(
        (value) => {
            res.json({ data: value })
        }, (error) => {
            res.json({ error: error }, 404)
        }
    )
})

router.get('/:user_id', function (req, res) {
    res.send('Hello GET')
})

router.put('/:user_id', function (req, res) {
    res.send('Hello GET')
})

router.patch('/:user_id', function (req, res) {
    res.send('Hello GET')
})

router.delete('/:user_id', function (req, res) {
    res.send('Hello GET')
})

module.exports = router
