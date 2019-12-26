const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const close = document.querySelector('.close');
const logo = document.querySelector('.logo-container img')
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.style.display = "none";
    close.style.display = "block";

    close.style.transition = "all 0.5s ease 0.4s"
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});
close.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    close.style.display = "none";
    hamburger.style.display = "block";
    hamburger.style.transition = "all 0.5s ease 0.4s"
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});
logo.addEventListener("click", () => {
    if (navLinks.classList[1] == 'open') {
        navLinks.classList.toggle("open");
        close.style.display = "none";
        hamburger.style.display = "block";
        hamburger.style.transition = "all 0.5s ease 0.4s"
        links.forEach(link => {
            link.classList.toggle("fade");
        });
    }
});
var count;
window.screen.width < 875 ? count = 30 : count = 100;

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": count,
            "density": {
                "enable": false,
                "value_area": 400
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 3,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
