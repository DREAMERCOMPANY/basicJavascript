class Apto {
    constructor({nombre, telefono, costo, ubicacion, dia, hora, bañoCompartido}){
        this.nombre = nombre
        this.telefono = telefono
        this.costo = costo
        this.ubicacion = ubicacion
        this.dia = dia
        this.hora = hora
        this.bañoCompartido = bañoCompartido
    }

mostrarInfo(){
    if(this.bañoCompartido == true){
        this.bañoCompartido = 'Baño compartido'
    }else if(this.bañoCompartido == false){
        this.bañoCompartido = 'Baño independiente'
    }

console.log(`
Nombre: ${this.nombre}
Telefono: ${this.telefono}
Costo: ${this.costo}
Ubicacion: ${this.ubicacion}
Dia visita: ${this.dia}
Hora visita: ${this.hora}
Baño: ${this.bañoCompartido}`)
}
}

const apt1= new Apto({
    nombre:'Dairon',
    telefono: 3225352424, 
    costo: 400.000, 
    ubicacion:'calle 1d #18-17 , Barrio eduardo santos localidad los martires'})

    const apt2= new Apto({
        nombre:'Alberto',
        telefono: 3044010020, 
        costo: '350.000', 
        ubicacion:'Confirma cuando vayamos a ir'})

        const apt3= new Apto({
            nombre:'SANDRISS',
            telefono: 3142272655, 
            costo: '350.000', 
            ubicacion:'Calle 127D bis No 88d-07 '})

            
        const apt4= new Apto({
            nombre:'Blanca',
            telefono: 3132061257, 
            costo: '390.000', 
            ubicacion:'Carrea 52g #31-10sur'})

            const apt5= new Apto({
                nombre:'Helber',
                telefono: 3118937313, 
                costo: '450.000', 
                ubicacion:'Kennedy',
                bañoCompartido: true})

                const apt6= new Apto({
                    nombre:'Jairo',
                    telefono: 3102508581  , 
                    costo: '490.000 ', 
                    ubicacion:'calle 7 # 31A 46, Barrio Pensilvania',
                    bañoCompartido: false})

apt1.mostrarInfo()
apt2.mostrarInfo()
apt3.mostrarInfo()
apt4.mostrarInfo()
apt5.mostrarInfo()
apt6.mostrarInfo()



