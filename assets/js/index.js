
if (window.SimpleSlide) {
    new SimpleSlide({
        slide: "quote", // nome do atributo data-slide="principal"   
        time: 4000 // tempo de transição dos slides
    });

    new SimpleSlide({
        slide: 'portifoio',
        nav: true,
        time: 5000
    });
}

if (window.SimpleAnime) {
    new SimpleAnime();
}

if (window.SimpleForm) {
    new SimpleForm({
        form: ".form_php", // seletor do formulário
        button: "#enviar", // seletor do botão
        erro: "<div id='form-erro'><h2>Erro no envio :(</h2><p>Um erro ocorreu, tente enviar um email para <strong>lucas.7heverton@hotmail.com</strong>.</p></div>", // mensagem de erro
        sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>" // mensagem de sucesso
      });
}

var data = new Date();
var ano = data.getFullYear();

document.querySelector(".hour").innerText = `${ano}`;