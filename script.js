document.addEventListener('DOMContentLoaded', function() {
    // Header Logic
    let lastScrollTop = 0;
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    // Mobile Menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Privacy Modal
    const openPrivacy = document.getElementById('open-privacy');
    const closePrivacy = document.getElementById('close-privacy');
    const closePrivacyBtn = document.getElementById('close-privacy-btn');
    const modal = document.getElementById('privacy-modal');

    function toggleModal() {
        modal.classList.toggle('hidden');
    }

    openPrivacy.addEventListener('click', toggleModal);
    closePrivacy.addEventListener('click', toggleModal);
    closePrivacyBtn.addEventListener('click', toggleModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            toggleModal();
        }
    });
});