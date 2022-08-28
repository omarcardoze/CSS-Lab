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
    {
        title: 'Grid personalizado con fotos y frases de naturaleza',
        description: 'Hecho con Grid template'
    },
    {
        title: 'Card de testimoninos',
        description: 'Card de testimonios de clientes'
    },
    {
        title: 'Tabla de datos',
        description: 'Tabla de datos responsiva'
    },
    {
        description: 'Animación sencilla',
        title: 'Animación sencilla de SVG con CSS',
    },
    {
        description: 'Menú inferior',
        title: 'Menú inferior como app móvil',
    },
    {
        description: 'Modal',
        title: 'Modal con solo CSS sin JS',
    },
    {
        description: 'barra de progreso con el scroll',
        title: 'Barra de progreso con el scroll',
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


