import express from 'express'

const app = express()
const port = 3000
app.use(express.json()); //middleware

app.get('/', (req, res) => {
  res.send('API for authentication and authorization users')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})