"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

const menuIcon = document.querySelector('.menu_icon');
if (menuIcon){
    const navBar = document.querySelector('.nav-bar');
    menuIcon.addEventListener("click", function (e){
        document.body.classList.toggle('_lock')
        menuIcon.classList.toggle('_active');
        navBar.classList.toggle('_active');
    });
}




//sliders
document.addEventListener("DOMContentLoaded", function() {
    initializeSlider("slider-container-1", "slider-dots-1");
    initializeSlider("slider-container-2", "slider-dots-2");

    function initializeSlider(containerId, dotsId) {
        const slideContainer = document.getElementById(containerId).querySelector(".slide");
        const dotsContainer = document.getElementById(dotsId);

        // Удаляем существующие точки, если они есть
        dotsContainer.innerHTML = '';

        const slides = slideContainer.querySelectorAll("img");

        slides.forEach((_, index) => {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            dot.addEventListener("click", () => goToSlide(index, containerId));
            dotsContainer.appendChild(dot);
        });

        function updateDots(currentIndex) {
            const dots = dotsContainer.querySelectorAll(".dot");
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add("active");
                } else {
                    dot.classList.remove("active");
                }
            });
        }

        function goToSlide(index) {
            slideContainer.scrollTo({
                left: index * slideContainer.clientWidth,
                behavior: "smooth"
            });
            updateDots(index);
        }

        // Начальная настройка
        updateDots(0);
    }
});


