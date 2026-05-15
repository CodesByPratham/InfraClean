document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuIcon = document.querySelector('[data-mobile-menu-icon]');

    if (mobileMenuToggle && mobileMenu) {
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');

        const setMobileMenuState = (isOpen) => {
            mobileMenu.classList.toggle('is-open', isOpen);
            mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');

            if (mobileMenuIcon) {
                mobileMenuIcon.textContent = isOpen ? 'close' : 'menu';
            }
        };

        mobileMenuToggle.addEventListener('click', () => {
            const isOpen = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            setMobileMenuState(!isOpen);
        });

        mobileMenuLinks.forEach((link) => {
            link.addEventListener('click', () => setMobileMenuState(false));
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                setMobileMenuState(false);
            }
        });
    }

    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const modalTriggers = document.querySelectorAll('[data-modal-open]');
    const modalElements = document.querySelectorAll('.policy-modal');
    let activeModal = null;

    const setModalState = (modal, isOpen) => {
        if (!modal) {
            return;
        }

        modal.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        modal.classList.toggle('hidden', !isOpen);
        modal.classList.toggle('flex', isOpen);
        modal.classList.toggle('is-open', isOpen);
    };

    const openModal = (modalId) => {
        const modal = document.getElementById(modalId);

        if (!modal) {
            return;
        }

        if (activeModal) {
            setModalState(activeModal, false);
        }

        activeModal = modal;
        setModalState(activeModal, true);
        document.body.classList.add('overflow-hidden');
    };

    const closeModal = () => {
        if (!activeModal) {
            return;
        }

        setModalState(activeModal, false);
        activeModal = null;
        document.body.classList.remove('overflow-hidden');
    };

    modalTriggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            openModal(trigger.dataset.modalOpen);
        });
    });

    modalElements.forEach((modal) => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        modal.querySelectorAll('[data-modal-close]').forEach((closeBtn) => {
            closeBtn.addEventListener('click', closeModal);
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
