// java script code 
const rsvpButton = document.getElementById("rsvp-button");
const rsvpFormContainer = document.getElementById("rsvp-form-container");


rsvpButton.addEventListener("click", function() {
  rsvpFormContainer.classList.remove("hidden"); 
});
document.getElementById("rsvp-button").addEventListener("click", function() {
  document.getElementById("rsvp-form-container").classList.remove("hidden");
});

document.getElementById("rsvp-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var attendance = document.getElementById("attendance").value;


  var message = `Olá, aqui é o(a) ${name}. 🎉 Presença confirmadíssima!
Não poderia perder o aniversário da Alexandra por nada!
Vai ser incrível — já estou contando os minutos! 🥳✨
Dia 13 de Maio, às 14h, na Rua MMBBE'ST, ANYEOMN.
Nos vemos lá! 🎈🎂\Presença: ${attendance === 'sim' ? 'Sim' : 'Não'}`;


  var whatsappLink = `https://wa.me/telefone?text=${encodeURIComponent(message)}`;
  

  document.getElementById("whatsapp-link").href = whatsappLink;

  document.getElementById("confirmation-message").classList.remove("hidden");
});
