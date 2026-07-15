document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ JavaScript is loaded!');

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
    } else {
        console.warn('⚠️ Mobile menu elements not found');
    }

    // ===== DARK MODE TOGGLE SWITCH =====
    const darkToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    console.log('🔍 Dark toggle found?', darkToggle); // Should show the element, not null

    if (!darkToggle) {
        console.error('❌ Toggle not found! Check ID "darkModeToggle" in HTML.');
        return;
    }

    // Restore saved preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        darkToggle.checked = true;
        console.log('🌙 Dark mode restored from localStorage');
    }

    // Listen for toggle changes
    darkToggle.addEventListener('change', function() {
        console.log('🔄 Toggle changed. Checked?', this.checked);
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
            console.log('🌙 Dark mode ENABLED');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
            console.log('☀️ Dark mode DISABLED');
        }
    });
});