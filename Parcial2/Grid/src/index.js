new gridjs.Grid({
    columns: ['ID Persona','Nombre', 'Correo'],
    server: {
    url: 'http://localhost:8080/ConsultarPersona',
        then: data => data.map(persona => 
            [persona.id, persona.nombre, persona.correo]
        )
    } 
}).render(document.getElementById("wrapper"));