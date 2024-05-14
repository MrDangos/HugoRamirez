
function animeFade() {
    const element = document.getElementById('animateMe'); 
    element.style.opacity = 0; 

    let opacity = 0; 

    const interval = setInterval(() => { 
        if (opacity >= 1) {
            clearInterval(interval); 
        } else {
            opacity += 0.15; 
            element.style.opacity = opacity; 
        }
    }, 100); 
}

function animeSlide() {
    const images = document.querySelectorAll('.image-wrapper img');
    const ulElement = document.querySelector('ul');

    images.forEach((image) => {
        image.style.marginLeft = '100vw';

        let marginLeft = parseFloat(image.style.marginLeft);
        const interval = setInterval(() => {
            if (marginLeft <= 0) { 
                clearInterval(interval); 
            } else {
                marginLeft -= 10; 
                image.style.marginLeft = marginLeft + 'px'; 
            }
        }, 50);
    });


    ulElement.style.marginLeft = '-100vw';

    let marginLeft = parseFloat(ulElement.style.marginLeft);
    const interval = setInterval(() => {
        if (marginLeft >= 0) { 
            clearInterval(interval); 
        } else {
            marginLeft += 10;
            ulElement.style.marginLeft = marginLeft + 'px'; 
        }
    }, 50); 
}

window.addEventListener('load', animeSlide);