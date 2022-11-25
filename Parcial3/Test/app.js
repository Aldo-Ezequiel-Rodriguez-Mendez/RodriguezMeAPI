const xp = require("express")
const ruta = require('./routes/ruta_persona');
const path = require("path")

const swaggerUI  = require('swagger-ui-express');
const swaggerJsDoc  = require('swagger-jsdoc');


const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Personas',
            version: '1.0.0',      
        },
        servers:[{url: "http://localhost:8080"}],  
    },
        apis: [`${path.join(__dirname,"./routes/ruta_persona.js")}`],  
};

const app = xp()

app.use(xp.text())
app.use(xp.json())


app.use("/persona",ruta.router)

app.listen(8080)

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));