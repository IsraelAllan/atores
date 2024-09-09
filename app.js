function pesquisar(){ // Quando clicar vai aparecer os atores
    let section = document.getElementById("resultados") // Vai pegar o ID do HTML
    //console.log(section); // Vai mostrar a váriavel section no console.

    let campoPesquisa = document.getElementById("campo-pesquisa").value; // Vai pegar o valor da váriavel e relacionar.
    console.log(campoPesquisa);
    
    if(campoPesquisa == ""){
      section.innerHTML ="<p> Digite pelo menos uma palavra.</p>"  
      return   // Se a string for vazia, vai finalizar a função pesquisar.
    }
    campoPesquisa = campoPesquisa.toLowerCase(); // Transformar em letra minuscula para facilitar na pesquisa

    let resultado = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    //Para cada dado dentro da lista de dados
    for (let dado of atores) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // então crie um novo elemento
        // Vai pegar determinado dados do HTML, nesse caso a div, h2 e o p. += para concatenar os novos elementos HTML ao elemento selecionado.
         resultado += `  
            <div class="item-resultado">
                <h2> 
                    <a href="https://youtu.be/zn1Dv_THNKg?si=fMXosa0a8MriV1HX" target="_blank"> ${dado.titulo} </a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href= ${dado.link} target="_blank">Mais informações...</a>
            </div> 
            
    `;
        }
        // então faça
       
    } // lembrar de colocar o nome da nova váriavel. dado = atores.

    if(!resultado) { // se não tiver resultados referente a determinada pesquisa
       resultado = "<p> Não há resultados para a sua pesquisa...</p>";
    }
    
    section.innerHTML = resultado; // Tirei o section do laço de reptição, por ser uma váriavel critica e atribui a váriavel resultado.
    
};
