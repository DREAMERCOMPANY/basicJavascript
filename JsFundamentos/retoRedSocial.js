/*
Requerimientos reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados existe en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el
    timeline del usuario
4. Si el usuario y contraseña son incorrectos, el sistema de mostrar un mensaje de error y no mostrar
    ningun timeline.
*/

const usersDatabase =[
    {
        username: 'andres',
        password: '123'
    },

    {
        username: 'caro',
        password: '456'
    },

    {
        username: 'mariana',
        password: '789'
    }

]

const usersTimeline = [
    {
        username: 'andres',
        timeline: 'Me encanta JS'
    },

    {
        username: 'caro',
        timeline: 'Me gusta ir al parque'
    },

    {
        username: 'mariana',
        timeline: 'Disfruto la mecanica'
    },

    {
        username: 'Jhon',
        timeline: 'Siempre estoy aprendiendo y mejorando'
    }
]

const username = prompt(`¿What's your username?`)
const password = prompt(`¿What's your password?`)

function validateUsername(username, password){
    for(data of usersDatabase){
        if(data.username === username && data.password === password){
            return true
        }
        
    }
    return false
}

function showTimeline(username, password){
    if(validateUsername(username, password)){
        alert(`Welcome, ${username}`)
        for(const timeline of usersTimeline){
            if(timeline.username === username){
                let newUsername = timeline.username.charAt(0).toLocaleUpperCase() + timeline.username.slice(1)
                document.body.innerHTML = `Hello ${newUsername}, your timeline is:\n ${timeline.timeline}`

            }
            
        }
    }else{
        alert('Humm, you have entered the wrong username and password')
    }
}

showTimeline(username, password)

