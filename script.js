document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.grid-card');

    // Efeito dinâmico nos cards ao passar o mouse (Feedback visual imediato)
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Adiciona um som opcional ou brilho extra aqui se quiser
            card.style.borderColor = '#7c3aed';
        });

        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255, 255, 255, 0.05)';
        });
    });
});
