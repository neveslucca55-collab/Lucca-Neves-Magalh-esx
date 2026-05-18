document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.grid-card');

    // Efeito dinâmico nos cards ao passar o mouse (Feedback visual imediato)
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Se for o card especial de pasta, ele brilha em ciano, senão em roxo neon
            if (card.classList.contains('folder-card')) {
                card.style.borderColor = '#06b6d4';
            } else {
                card.style.borderColor = '#7c3aed';
            }
        });

        card.addEventListener('mouseleave', () => {
            if (card.classList.contains('folder-card')) {
                card.style.borderColor = 'rgba(124, 58, 237, 0.3)';
            } else {
                card.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            }
        });
    });
});
