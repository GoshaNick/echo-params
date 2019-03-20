const express = require('express')
const app = express()

app.get('*', (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.write(`<pre>${JSON.stringify({query: req.query, params: req.params}, null, 2)}</pre>`)
    res.end()
})

module.exports = app
