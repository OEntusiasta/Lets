function openModal() {
    const modalcontact = document.getElementById('modal-screen-contact')
    modal = modalcontact.classList.add('active')
}

function closeModal() {
    const modalcontact = document.getElementById('modal-screen-contact')
    modal = modalcontact.classList.remove('active')
}

function limpa_formulário_cep() {

    document.getElementById('cep').value = ("");
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('complemento').value = ("");
    document.getElementById('number').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
 
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
    } //end if.
    else {

        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}


function pesquisacep(valor) {

  
    var cep = valor.replace(/\D/g, '');

    if (cep != "") {

    
        var validacep = /^[0-9]{8}$/;

      
        if (validacep.test(cep)) {

     
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";

            var script = document.createElement('script');

       
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

          
            document.body.appendChild(script);

        } 
        else {
       
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } 
    else {
        
        limpa_formulário_cep();
    }
}

//slider

var slideIndex = 0;
showSlides();

let canViewMenu = false;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("swiper-slide2");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}