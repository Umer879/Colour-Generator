let col = document.querySelectorAll('.box')
let h1 = document.getElementById('h1')
let p = document.querySelector('#p')
col.forEach((box) => {
    box.addEventListener('click', (colChange) => {

        if (colChange.target.id === 'blue') {
            document.body.style.background = 'rgb(74, 137, 247)'
            h1.style.color = 'white'
            p.style.color = 'purple'
        } else if (colChange.target.id === 'hotpink') {
            document.body.style.background = 'rgb(254, 120, 187)'
            h1.style.color = 'red'
            p.style.color = 'blue'

        } else if (colChange.target.id === 'purple') {
            document.body.style.background = 'rgb(212, 58, 212)'
            h1.style.color = 'rgb(128, 0, 12)'
            p.style.color = 'pink'
        } else {
            document.body.style.background = 'rgb(128, 0, 12)'
            h1.style.color = 'rgb(200, 255, 0)'
            p.style.color = 'pink'
        }

    })

})

let reset = document.querySelector('.reset')
reset.addEventListener('click', (e)=>{
    document.body.style.background = 'white'
    h1.style.color = 'black'
    p.style.color = 'black'

})
