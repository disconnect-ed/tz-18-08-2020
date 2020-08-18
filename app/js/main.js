$(function () {

    //fullpage
    new fullpage('#fullpage', {
        anchors: ['page1', 'page2', 'page3'],
    });
    //===

    //slider
    $('.slider').slick({
        autoplay: true,
    });
    //===

    //stars
    const text = document.querySelector('.section_second__text')
    const star1 = document.querySelector('#star-1')
    const star2 = document.querySelector('#star-2')
    const star3 = document.querySelector('#star-3')
    const star4 = document.querySelector('#star-4')
    const sectionSecond = document.querySelector('.section_second')
    let xp = 50
    let yp = 50
    let rotate = 0
    sectionSecond.onmousemove = (e) => {
        if (text.value !== 'Go!') {
            text.innerText = 'Go!'
        }
        xp += (e.clientX - xp) / 1000
        yp += (e.clientY - yp) / 1000
        star1.style.left = xp +'px';
        star2.style.left = xp +'px';
        star3.style.right = xp +'px';
        star4.style.right = xp +'px';
        star1.style.top = yp +'px';
        star2.style.bottom = yp +'px';
        star3.style.top = yp +'px';
        star4.style.bottom = yp +'px';
        star1.style.transform = `rotate(${rotate++}deg)`
        star2.style.transform = `rotate(${rotate++}deg)`
        star3.style.transform = `rotate(${rotate++}deg)`
        star4.style.transform = `rotate(${rotate++}deg)`
    }
    //===

    //form
    const form = document.querySelector('#form')
    const email = document.querySelector('#email')
    const emailError = document.querySelector('#email-error')
    const name = document.querySelector('#name')
    const nameError = document.querySelector('#name-error')
    const message = document.querySelector('#message')
    const messageError = document.querySelector('#message-error')
    const modal = document.querySelector('.form-message')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (!validate()) {
            email.value = ''
            name.value = ''
            message.value = ''
            modalActive()
        }
    })

    const validate = () => {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;;
        let error = false
        if (reg.test(email.value) === false) {
            emailError.innerText = 'Некорректный email адрес'
            emailError.classList.add('error_active')
            error = true
        } else {
            emailError.innerText = ''
            emailError.classList.remove('error_active')
        }
        if (name.value.trim().length < 2 ) {
            nameError.innerText = 'Некорректное имя'
            nameError.classList.add('error_active')
            error = true
        } else {
            nameError.innerText = ''
            nameError.classList.remove('error_active')
        }
        if (!message.value.trim()) {
            messageError.innerText = 'Обязательное поле'
            messageError.classList.add('error_active')
            error = true
        } else {
            messageError.innerText = ''
            messageError.classList.remove('error_active')
        }
        return error
    }

    const modalActive = () => {
        modal.classList.add('form-message_active')
        setTimeout(() => {
            modal.classList.remove('form-message_active')
        }, 4000)
    }
    //===

});