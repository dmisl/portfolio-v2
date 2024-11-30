// MENU SWITCHING

const sections = document.querySelectorAll('.section');

function getCenteredSection() {
    const viewportCenter = window.innerHeight / 2;

    let centeredSection = null;
    let closestDistance = Infinity;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;

        const distanceToCenter = Math.abs(sectionCenter - viewportCenter);

        if (distanceToCenter < closestDistance) {
        closestDistance = distanceToCenter;
        centeredSection = section;
        }
    });

    return centeredSection;
}

// Log the centered section on scroll
if(window.innerWidth > 1000)
{
    window.addEventListener('scroll', () => {
        const centeredSection = getCenteredSection();
        let menuElements = document.querySelectorAll('.hero-menu, .projects-menu, .about-me-menu, .contacts-menu')
        menuElements.forEach(element => {
             element.classList.remove('selected')
        });
        if(centeredSection.classList[0] == 'hero')
        {
            document.querySelector('.hero-menu').classList.add('selected')
        } else if(centeredSection.classList[0] == 'projects')
        {
            document.querySelector('.projects-menu').classList.add('selected')
        } else if(centeredSection.classList[0] == 'skills' || centeredSection.classList[0] == 'about-me')
        {
            document.querySelector('.about-me-menu').classList.add('selected')
        } else
        {
            document.querySelector('.contacts-menu').classList.add('selected')
        }
    });
}