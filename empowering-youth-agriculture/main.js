document.addEventListener('DOMContentLoaded', function() {
    // ===== MOBILE MENU TOGGLE =====
    const toggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.primary-nav');

    if (toggle && nav) {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('open');
            toggle.classList.toggle('open');
        });

        nav.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                nav.classList.remove('open');
                toggle.classList.remove('open');
            });
        });
    }

    // ===== DARK MODE TOGGLE SWITCH =====
    const darkToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check if user already has a preference saved
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        if (darkToggle) {
            darkToggle.checked = true;
        }
    }

    if (darkToggle) {
        darkToggle.addEventListener('change', function() {
            if (this.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('dark-mode', 'enabled');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('dark-mode', 'disabled');
            }
        });
    }
});