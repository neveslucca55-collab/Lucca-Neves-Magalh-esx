// Aguarda todo o HTML carregar antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    
    const card = document.getElementById('interactive-card');
    const btnContato = document.getElementById('btn-contato');

    // Efeito Interativo 3D no Cartão de Vidro (Mousemove)
    if (card) {
        document.addEventListener('mousemove', (e) => {
            // Calcula a posição do mouse na tela
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            
            // Aplica uma leve rotação baseada no mouse para o efeito 3D
            // Mantém a animação CSS de flutuação pausada ou combinada enquanto move
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-10px)`;
        });

        // Reseta a posição do cartão quando o mouse sai da tela
        document.addEventListener('mouseleave', () => {
            card.style.transform = `rotateY(0deg) rotateX(0deg) translateY(0px)`;
            card.style.transition = 'all 0.5s ease';
        });
    }

    // Comportamento do botão de contato
    if (btnContato) {
        btnContato.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o salto de página padrão do link '#'
            alert('🚀 Ótima escolha! Substitua este alerta pelo redirecionamento para o seu WhatsApp, e-mail ou seção de contato.');
        });
    }
});
