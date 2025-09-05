particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 30,
      "density": {"enable": true, "value_area": 800}
    },
    "color": {"value": "#ff69b4"},
    "shape": {"type": "circle"},
    "opacity": {
      "value": 0.7,
      "random": true,
      "anim": {"enable": true, "speed": 0.5, "opacity_min": 0.3}
    },
    "size": {
      "value": 8,
      "random": true,
      "anim": {"enable": true, "speed": 3, "size_min": 0.3}
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "top",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": {"enable": true, "mode": "repulse"},
      "onclick": {"enable": true, "mode": "push"}
    },
    "modes": {
      "repulse": {"distance": 100, "duration": 0.4},
      "push": {"particles_nb": 4}
    }
  },
  "retina_detect": true
});