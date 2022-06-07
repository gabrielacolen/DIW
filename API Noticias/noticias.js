const API_KEY = '940a9d14f5494cef9b222768d7828b91';

function exibeNoticias(){
    let divTela = document.getElementById('tela');
    let texto = '';

    //MONTAR TEXTO HTML DAS NOTÍCIAS
    let dados = JSON.parse(this.responseText);
    for (i=0; i<dados.articles.length; i++){
        let noticia = dados.articles[i];
        //let data = new Date (noticia.publishedAt);
        texto += `
            <div class="box-noticia">
                <img src="${noticia.urlToImage}" alt="">
                <span class="titulo">${noticia.title}</span><br>
                <span class="creditos"> ${noticia.source.name} - ${noticia.author} </span><br>
                <span class="texto">${noticia.content}</span><br>
                <a href="${noticia.url}">Leia mais...</a> 
            </div>
        `
    };

    //PREENCHER A DIV COM O TEXTO HTML
    divTela.innerHTML = texto;
}

function executaPesquisa (){

    let query = document.getElementById('txtPesquisa').value;
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send ();

}

document.getElementById('btnPesquisa').addEventListener ('click', executaPesquisa);
