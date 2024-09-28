 // Função para abrir o formulário
function abrirFormulario() {
    document.getElementById("form-agendar").style.display = "block";
  }
  
  // Função para fechar o formulário
  function fecharFormulario() {
    document.getElementById("form-agendar").style.display = "none";
  }
  
  // Função para enviar os dados do formulário para o WhatsApp
  function enviarMensagemWhatsApp(nome, telefone, email, data, hora) {
    var numeroWhatsApp = "5511934901494"; // Número de WhatsApp
    var mensagem =
      "Olá, meu nome é " +
      encodeURIComponent(nome) +
      ". Gostaria de agendar uma consulta no dia " +
      encodeURIComponent(data) +
      " às " +
      encodeURIComponent(hora) +
      ". Meu telefone é " +
      encodeURIComponent(telefone) +
      " e meu e-mail é " +
      encodeURIComponent(email) +
      ".";
  
    var url = "https://wa.me/" + numeroWhatsApp + "?text=" + mensagem;
    window.open(url, "_blank");
  }
  
  // Adiciona o evento de envio do formulário
  document
    .getElementById("form-agendamento")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      var nome = document.getElementById("nome").value;
      var telefone = document.getElementById("telefone").value;
      var email = document.getElementById("email").value;
      var data = document.getElementById("data").value;
      var hora = document.getElementById("hora").value;
  
      enviarMensagemWhatsApp(nome, telefone, email, data, hora);
  
      // Fecha o formulário após o envio
      fecharFormulario();
    });
  
  // Imagens e modais
  const imagens = document.querySelectorAll("#nosso-espaco .imagem-thumbnail");
  const modalImagem = document.getElementById("modal-img");
  const modalImagemContent = document.getElementById("modal-img-content");
  const closeImagem = document.querySelector(".close-img");
  const prevImagem = document.querySelector(".prev-img");
  const nextImagem = document.querySelector(".next-img");
  
  let imagemIndex = 0; // Índice da imagem atual
  
  // Abre o modal de imagem
  function abrirModalImagem(index) {
    imagemIndex = index;
    modalImagem.style.display = "block";
    modalImagemContent.src = imagens[imagemIndex].src;
  }
  
  // Navega entre as imagens
  function changeImage(n) {
    imagemIndex += n;
    if (imagemIndex >= imagens.length) imagemIndex = 0;
    if (imagemIndex < 0) imagemIndex = imagens.length - 1;
    modalImagemContent.src = imagens[imagemIndex].src;
  }
  
  // Adiciona um evento de clique para cada imagem
  imagens.forEach((imagem, index) => {
    imagem.addEventListener("click", () => abrirModalImagem(index));
  });
  
  // Fecha o modal quando o botão de fechar é clicado
  closeImagem.addEventListener("click", () => {
    modalImagem.style.display = "none";
  });
  
  // Fecha o modal quando o usuário clica fora da imagem
  window.addEventListener("click", (event) => {
    if (event.target === modalImagem) {
      modalImagem.style.display = "none";
    }
  });
  
  // Funções para o segundo modal
  const modal1 = document.getElementById("myModal");
  const close1 = document.querySelector(".close-1");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const modalImage1 = document.querySelector(".modal-image-1");
  
  // Abre o segundo modal
  function abrirModal1() {
    modal1.style.display = "block";
  }
  
  // Navega entre as imagens no segundo modal
  function changeSlide(n) {
    const imagensModal1 = document.querySelectorAll(".card img");
    let currentIndex = Array.from(imagensModal1).indexOf(modalImage1);
    currentIndex += n;
    if (currentIndex >= imagensModal1.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = imagensModal1.length - 1;
    modalImage1.src = imagensModal1[currentIndex].src;
  }
  
  // Adiciona os eventos de navegação no segundo modal
  prev.addEventListener("click", () => changeSlide(-1));
  next.addEventListener("click", () => changeSlide(1));
  
  // Fecha o segundo modal quando o botão de fechar é clicado
  close1.addEventListener("click", () => {
    modal1.style.display = "none";
  });
  
  // Fecha o segundo modal quando o usuário clica fora da imagem
  window.addEventListener("click", (event) => {
    if (event.target === modal1) {
      modal1.style.display = "none";
    }
  });
  // Abrir e fechar o formulário de agendamento
function abrirFormulario() {
  document.getElementById('form-agendar').style.display = 'block';
}

function fecharFormulario() {
  document.getElementById('form-agendar').style.display = 'none';
}

// Abrir modal de imagem
function abrirModalImagem(index) {
  var modal = document.getElementById("modal-img");
  var img = document.getElementsByClassName("imagem-thumbnail")[index];
  var modalImg = document.getElementById("img01");
  
  modal.style.display = "block";
  modalImg.src = img.src;
}

document.querySelector(".close-img").onclick = function() {
  document.getElementById("modal-img").style.display = "none";
};

// Funções para o modal de galeria
var slideIndex = 1;
mostrarSlides(slideIndex);

function changeSlide(n) {
  mostrarSlides(slideIndex += n);
}

function mostrarSlides(n) {
  var i;
  var slides = document.getElementsByClassName("modal-image-1");

  if (n > slides.length) {
      slideIndex = 1;
  }
  if (n < 1) {
      slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

document.querySelector(".close-1").onclick = function() {
  document.getElementById("myModal").style.display = "none";
};