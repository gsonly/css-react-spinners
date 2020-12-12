const express = require('express')
const { createElement, Fragment } = require('react')
const { renderToString } = require('react-dom/server')
const { Roller, Ring, Ripple } = require('css-react-spinners')

const app = express()
const port = 3000

const html = renderToString(
  createElement(
    Fragment,
    null,
    createElement(Ring),
    createElement(Ripple),
    createElement(Roller)
  )
)

app.get('*', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    ${html}
  </body>
  </html>
  `)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
