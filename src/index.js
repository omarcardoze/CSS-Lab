const root = document.getElementById('root')

const days = [
    {
        title: 'Uso del width: min(x, x) para el contenedor',
        description: 'Es un simple contenedor pero usando la función min() de CSS puede ser muy útil.'
    },
    {
        title: 'Galería de imágenes',
        description: 'Galería de imágenes sencilla sin usar flex ni css grid.'
    },
    {
        title: 'Header con texto e imágen responsiva',
        description: 'En este header utilizo la función de css clamp() para adaptar los textos.'
    },
    {
        title: 'Texto responsivo 2 + degradado',
        description: 'El texto tiene la uniad relativa de css vw que cambia según el viewport del dispositivo.'
    },
    {
        title: 'Sitio tipo blog sencillo',
        description: 'Utilizo CSS Grid con template para el layout'
    },
    {
        title: 'Newsletters',
        description: 'Newsletter de un blog'
    },
    {
        title: 'Acordeón de preguntas frecuentas',
        description: 'Uso del details de css'
    },
    {
        title: 'Formulario de Reservación',
        description: 'Formulario para reservación de hoteles'
    },
    {
        title: 'Clone GitHub login',
        description: 'Clone de la página de inicio de sesión de GitHub.'
    },
    {
        title: 'Card con scroll horizontal',
        description: 'Uso del scroll-snap de css'
    },
    {
        title: 'Plan de precios de servicios',
        description: 'Se muestran los precios y características de un servicio'
    },
]

days.map(({ title, description }, index ) => {

    let day = index + 1

    root.innerHTML += `
         <div class="project-card">
            <div class="card-title">
                <a class="title" href="/day/day${day}">${title}</a>
                <span class="text-white day-challenge">${day}</span>
            </div>
            <p class="card-description">${description}</p>
        </div>
    `
})


