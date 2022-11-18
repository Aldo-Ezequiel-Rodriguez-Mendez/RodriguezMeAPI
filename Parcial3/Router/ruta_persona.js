const xp = require("express")
const path = require("path")

const ruta = require('./app')

const app = xp()

app.use(xp.text())
app.use(xp.json())


app.use("/persona",ruta.router)

app.listen(8080)