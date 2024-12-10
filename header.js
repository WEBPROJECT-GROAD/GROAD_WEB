document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('mouseenter', () => {
            document.querySelectorAll('.dropdown-content').forEach((content) => {
                content.style.display = 'block';
                content.style.opacity = '1';
                content.style.visibility = 'visible';
                content.style.transform = 'translateY(0)';
            });
            document.getElementById('whiteblock').style.display='flex';
        });

        dropdown.addEventListener('mouseleave', () => {

            document.querySelectorAll('.dropdown-content').forEach((content) => {
                content.style.display = 'none';
                content.style.opacity = '0';
                content.style.visibility = 'hidden';
                content.style.transform = 'translateY(-10px)';
            });
            document.getElementById('whiteblock').style.display='none';

        });
    });
});

