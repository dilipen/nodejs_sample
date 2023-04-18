
const format = require('pg-format')
const pool = require('./../database')

function getUsers() {
    return new Promise(function (resolve, reject) {
        pool.connect(function (err, client) {
            if (err) reject(new Error(err))
            const sql = format('select * from users')
            try{
                client.query(sql, function (err, result) {
                    if (err) reject(new Error(err))
                    resolve(result.rows)
                })
            } catch (error) {
                reject(new Error(error))
            }
        })
    })
}

function postUser(username, password, name, email) {
    return new Promise(function (resolve, reject) {
        pool.connect(function (err, client) {
            if (err) throw reject(new Error(err))
            const sql = format('insert into users (username, password, name, email) values (%L);', [username, password, name, email])
            console.log(sql)
            resolve(sql)
            // client.query(sql, function(err, result) {
            //     if(err) throw reject(new Error(err))
            //     resolve(result.rows)
            // })
        })
    })
}

module.exports = { getUsers, postUser }
