const mainSections = document.querySelectorAll('section')
const selector = document.querySelector('.selector')
const links = document.querySelectorAll('header nav ul li a')
const options = {
    threshold: 0.7,
}

selector.style.display = 'none'


let observer = new IntersectionObserver(navCheck, options)

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className
        const activeLink = document.querySelector(`[data-page=${className}]`)
        const coords = activeLink.getBoundingClientRect()
        const sizes = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left,
        }

        if(entry.isIntersecting){
            selector.style.display = ''
            selector.style.setProperty('height', `${sizes.height}px`)
            selector.style.setProperty('width', `${sizes.width}px`)
            selector.style.setProperty('top', `${sizes.top}px`)
            selector.style.setProperty('left', `${sizes.left}px`)
        }
    })
}

mainSections.forEach(section => {
    observer.observe(section)
})


/* let lastId
let cur = []

window.addEventListener('scroll', (e) => {
    let fromTop = window.scrollY
    console.log(fromTop)
    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash)

        if(section.offsetTop <= fromTop && 
            section.offsetTop + section.offsetHeight > fromTop){
                link.classList.add('current')
        } else {
            link.classList.remove('current')
        }
    })
}) */