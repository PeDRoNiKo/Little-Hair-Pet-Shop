let element_li = document.querySelectorAll('header li.hover');
let event_off = document.querySelectorAll('.off');
let event_on = document.querySelectorAll('.on');

// Criando a animação na barra de navegação.
element_li.forEach((i) => {

    i.addEventListener('mouseover', () => {
        document.querySelector('.icon.on').classList.add('off');
        document.querySelector('.icon.on').classList.remove('on');


        i.querySelector('div.icon').classList.add('on');
        i.querySelector('div.icon').classList.remove('off');


        i.addEventListener('mouseleave', () => {
            document.querySelector('.icon.on').classList.add('off');
            document.querySelector('.icon.on').classList.remove('on');

            document.querySelector('.home.icon').classList.add('on');
        });
    });

})