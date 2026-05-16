function mostrarMensagem(){
  alert("Seja bem-vindo ao meu portfólio 😄");
}

console.log("Portfólio carregado com sucesso!");

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0px 15px 40px rgba(56,189,248,0.4)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0px 10px 30px rgba(0,0,0,0.3)';
  });
});
