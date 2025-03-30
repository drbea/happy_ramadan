document.addEventListener('DOMContentLoaded', function() {
    const animationContainer = document.querySelector('.animation-container');

    // Créer des étoiles aléatoires
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        animationContainer.appendChild(star);
    }
});
