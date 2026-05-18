document.addEventListener('DOMContentLoaded', () => {

    const btnEmail = document.querySelector('.btn-outline');

    const emailValue = 'mateus05msd@gmail.com';

    if (btnEmail) {

        btnEmail.addEventListener('click', (e) => {

            e.preventDefault();

            navigator.clipboard.writeText(emailValue)
                .then(() => {

                    const originalText = btnEmail.textContent;

                    btnEmail.textContent = '✓ Copiado!';

                    btnEmail.style.borderColor = '#00e5ff';
                    btnEmail.style.color = '#00e5ff';

                    setTimeout(() => {

                        btnEmail.textContent = originalText;

                        btnEmail.style.borderColor =
                            'rgba(255, 255, 255, 0.06)';

                        btnEmail.style.color = '#ffffff';

                    }, 2000);

                })

                .catch(err => {

                    console.error('Erro ao copiar e-mail:', err);

                });

        });

    }

});
