const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.contenu').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

const mainTitle = document.querySelector('h1');
if (mainTitle) {
    window.addEventListener('load', () => {
        typeWriter(mainTitle, mainTitle.textContent);
    });
}

const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = `translateY(-10px) rotate(${Math.random() * 5 - 2.5}deg)`;
    });
    
    item.addEventListener('mouseout', () => {
        item.style.transform = 'translateY(0) rotate(0deg)';
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const seeMoreButtons = document.querySelectorAll('.see-more-btn');
    
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            
            const card = button.closest('.project-card');
            card.classList.toggle('active');
            
            if (card.classList.contains('active')) {
                button.textContent = 'See less';
            } else {
                button.textContent = 'See more';
            }
        });
    });

    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const cardStatus = card.getAttribute('data-status');

                if (filterValue === 'all' || filterValue === cardCategory || filterValue === cardStatus) {
                    card.classList.remove('hide');
                    card.style.display = 'flex';
                    
                    card.style.opacity = '0';
                    setTimeout(() => card.style.opacity = '1', 50);

                } else {
                    card.classList.add('hide');
                    setTimeout(() => {
                         if(card.classList.contains('hide')) card.style.display = 'none';
                    }, 50); 
                }
            });
        });
    });

});