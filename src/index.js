const root = document.getElementById('root')

const days = [
    {
        title: 'Comienzo el Lunes 1 de Agosto',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, pariatur.'
    },
]

days.map(({ title, description }, index ) => {

    let day = index + 1

    root.innerHTML += `
         <div class="project-card">
            <div class="card-title">
                <a class="title" href="/days/day0${day}/">${title}</a>
                <span class="text-white day-challenge">${day}</span>
            </div>
            <p class="card-description">${description}</p>
        </div>
    `
})