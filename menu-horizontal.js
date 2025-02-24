function toggleMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('active');
    if (!menu.classList.contains('active')) {
        resetMenu();
    }
}

function toggleSubmenu(event, element, isSubitem) {
    event.stopPropagation();
    let submenu = element.querySelector('ul');
    let icon = element.querySelector('.menu-arrow i');
    let parentMenu = element.closest('.menu, .submenu');

    if (!isSubitem) {
        document.querySelectorAll('.menu li ul').forEach(sub => {
            if (sub !== submenu) {
                sub.style.display = 'none';
                resetArrow(sub.parentElement);
            }
        });
    }

    if (isSubitem) {
        parentMenu.querySelectorAll(':scope > li > ul').forEach(sub => {
            if (sub !== submenu) {
                sub.style.display = 'none';
                resetArrow(sub.parentElement);
            }
        });
    }

    if (submenu) {
        let isVisible = submenu.style.display === 'block';
        submenu.style.display = isVisible ? 'none' : 'block';
        icon.classList.toggle('fa-chevron-down', isVisible);
        icon.classList.toggle('fa-chevron-up', !isVisible);
    }
}

function resetMenu() {
    document.querySelectorAll('.menu li ul').forEach(sub => {
        sub.style.display = 'none';
        resetArrow(sub.parentElement);
    });
}

function resetArrow(element) {
    let icon = element.querySelector('.menu-arrow i');
    if (icon) {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

document.addEventListener('click', function(event) {
    const menuContainer = document.querySelector('.menu-container');
    const menu = document.getElementById('menu');

    if (!menuContainer.contains(event.target)) {
        menu.classList.remove('active');
        resetMenu();
    }
});
