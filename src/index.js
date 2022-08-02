const root = document.getElementById('root')

const days = [
    {
        title: 'Uso del width: min(x, x) para el contenedor',
        description: 'Es un simple contenedor pero usando la función min() de CSS puede ser muy útil.'
    },
    {
        title: 'Card basica',
        description: 'Es un simple contenedor pero usando la función min() de CSS puede ser muy útil.'
    },
]

days.map(({ title, description }, index ) => {

    let day = index + 1

    root.innerHTML += `
         <div class="project-card">
            <div class="card-title">
                <a class="title" href="/day/day0${day}">${title}</a>
                <span class="text-white day-challenge">${day}</span>
            </div>
            <p class="card-description">${description}</p>
        </div>
    `
})


