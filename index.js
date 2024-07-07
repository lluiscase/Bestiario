const vida = document.querySelector(".vida")
const defesa = document.querySelector(".defesa")
const força = document.querySelector(".força")
const historia = document.querySelector(".historia")
const itens = document.querySelector(".itens")
const nome = document.querySelector(".nome")
const formas = document.getElementById("formas");
let intervalo;

var hulda = ["img/Hulda.png","img/Primeira.png","img/atemporal.png"]

var pakkaler = ["img/påkaller.png","img/final.png",  "img/final2.png"]

let indiceAtual = 0

function changeImg(images) {
    console.log(indiceAtual)
    console.log(images)
    var img = document.getElementById("imgnpc");
    img.src = images[indiceAtual];
    indiceAtual = (indiceAtual + 1) % images.length;
}

function finalizar(){
    clearInterval(intervalo);}

function openModal(){
    document.getElementById("myModal").style.display = "block"
}
function closeModal(){
    document.getElementById("myModal").style.display = "none"
    document.getElementById("monstros").style.filter = "none"
    document.getElementById("npcs").style.filter = "none"
    finalizar()
}

function iniciarAtualizacao(n) {
    intervalo = setInterval(function() {
        changeImg(n);
    }, 1000);
}

function slideMonster(n){
    document.getElementById("imgnpc").style.filter = "none"
    if(n == 1){
        document.getElementById("imgnpc").src = "img/besittelse.png";
        vida.textContent = "Vida:8 ";
        defesa.textContent = "Defesa:9 ";
        força.textContent = "Força:8";
        historia.textContent = "Besittelse, Um espírito selado dentro de um globo pela família Sigurd e passado pelos filhos a cada geração, qualquer membro da família consegue libertá-lo com facilidade, contudo nunca foi feito. O espírito é um fragmento de um demônio, o usuário que o libertar será possuído, atualmente Thomas é o possuído.";
        nome.textContent = "Besittelse";
        itens.textContent = "Poderes: Camuflagem, transmutação"
        document.createElement("button")
    }else if(n == 2){
        document.getElementById("imgnpc").src = "img/Giftangrep.png";
        vida.textContent = "Vida: 35";
        defesa.textContent = "Defesa: 2";
        força.textContent = "Força: 6";
        historia.textContent = "Esta criatura foi criada por um pacto entre Påkaller e Christopher. Caso Christopher morresse e sua familia ainda estivesse viva, Påkaller tem o direito a para transforma-lo no que quisesse para proteger a todos inclusive a criatura";
        itens.textContent = "Poderes: avanço explosivo, nevoa de veneno, desvio";
        nome.textContent = "Giftangrep - Morto";
        document.getElementById("imgnpc").style.filter = "grayscale(100%)"
    }else if(n == 3){
        document.getElementById("imgnpc").src = "img/Kanniballer morke.png";
        vida.textContent = "Vida: 30";
        defesa.textContent = "Defesa: ?";
        força.textContent = "Força: ?";
        historia.textContent = "Qualquer pessoa que morra pela doença de morke pode se torna essa coisa, faminta, sem visão";
        itens.textContent = "Poderes: Nenhum, contudo sua mordida equivale a de um crocodilo. Os furos presentes em seu corpo podem fazer qualquer matéria que encoste ser consumida aos poucos";
        nome.textContent = "Kanniballer";
    }else if(n == 4){
        document.getElementById("imgnpc").src = "img/Mus.png";
        vida.textContent = "Vida: ?";
        defesa.textContent = "Defesa: infinita";
        força.textContent = "Força: ?";
        historia.textContent = "Era um rato de estimação que acabou morrendo por causas naturais, contudo em meio a insanidade do Papa ele tentou a ressuireção do animal e criou algo de certa forma imortal, mas com fraqueza ao fogo";
        itens.textContent = "Poderes: Se regenera caso o dano não tenha sido por fogo, sua mordida equivale a de um hipopotamo";
        nome.textContent = "Mus";
    }else if(n == 5){
        document.getElementById("imgnpc").src = "img/påkaller.png";
        vida.textContent = "Vida: ?";
        defesa.textContent = "Defesa: ?";
        força.textContent = "Força: ?";
        historia.textContent = "Experimento falho do Papa, feito de um fragmento do Deus que está presente no labirinto e de corpos de cemiterios pela ilha";
        itens.textContent = "Poderes - forma selada: Cria Kanniballer por infecção| Poderes - forma final: pode criar braços explodindo os olhos em suas costas, regenera";
        nome.textContent = "Påkaller";
        iniciarAtualizacao(pakkaler);
    }else if(n == 6){
        document.getElementById("imgnpc").src = "img/Papa.png";
        vida.textContent = "Vida: ?";
        defesa.textContent = "Defesa: 4";
        força.textContent = "Força: 8";
        historia.textContent = "Um homem antes gentil, em meio a sua insanidade buscou ajuda naquilo que era considerado tabu. Explorando o labirinto existe na sua cidade, descobriu um Deus aprisionado na qual buscou ajuda e o corrompendo para todo sempre. Criador do nome e religião da ilha, basicamente o governante de tudo";
        itens.textContent = "Poderes: Enraizamento, explosão de escuridão(ritual), Cura(ritual), Deteriorização hipnotica(Ritual supremo)";
        nome.textContent = "Papa- MORTO";
        document.getElementById("imgnpc").style.filter = "grayscale(100%)"
    }else if(n == 7){
        document.getElementById("imgnpc").src = "img/Hulda.png";
        vida.textContent = "Vida: 5";
        defesa.textContent = "Defesa: 2";
        força.textContent = "Força: 4";
        historia.textContent = "Vinda de uma linhagem que tinha como dever cuidar do tempo, sendo a única filha de um dos senhores do tempo e assim herdando a vontade de sua familía, perdeu-se no poder e a favor do Papa colapsou o tempo da ilha";
        itens.textContent = "Poderes: Rouba atributos e vida, cria clones de si por cada linha do tempo";
        nome.textContent = "Hulda - MORTO";
        document.getElementById("imgnpc").style.filter = "grayscale(100%)"
        iniciarAtualizacao(hulda);
}
}

function currentSlide(n){
    document.getElementById("imgnpc").style.filter = "none"
    if(n == 1){
        document.getElementById("imgnpc").src = "img/Bjarte Aune - Capitão do navio.png";
        vida.textContent = "Vida: 8";
        defesa.textContent = "Defesa: 2";
        força.textContent = "Força: 4";
        historia.textContent = "Será enviado posteriormente quando me pedirem :D";
        itens.textContent = "Itens: braço mecanico, binoculo, cachecol";
        nome.textContent = "Bjarte - MORTO";
        document.getElementById("imgnpc").style.filter = "grayscale(100%)"
    }else if(n == 2){
        document.getElementById("imgnpc").src = "img/Manantra.png";
        vida.textContent = "Vida: 10";
        defesa.textContent = "Defesa: 4";
        força.textContent = "Força: 7";
        historia.textContent = "Sua familia pertencia a guarda do vilarejo (por isso da espada, mais especificamente cimitarra), seus olhos são vermelhos por conta da sua linhagem vir das terras mais distantes da vila. Sua familia tinha bom vinculo com todos da cidade principalmente com o papa(fundador da religião de morke, originou o nome), seu irmão trabalhou para ele por algum tempo, sua familia no entanto criou um sistema em todas as casas com base nos emblemas para a segurança do local e o papa tem a posse de todos. Teve treinamento desde seus 7 anos de idade e se tornou defensora de um dos emblemas. Atualmente está a procura de seu irmão junto com o grupo da expedição sua ultima pista não ajudou muito apenas recebeu um diario";
        itens.textContent = "Itens: Cimitarra, armadura, emblema de falcão";
        nome.textContent = "Manantra";
    }else if(n == 3){
        document.getElementById("imgnpc").src = "img/Morpheu.png";
        vida.textContent = "Vida: ?";
        defesa.textContent = "Defesa: ?";
        força.textContent = "Força: ?";
        historia.textContent = "A ser revelado";
        itens.textContent = "Itens: Manopla(tem a possibilidade de criar qualquer coisa que caiba em sua mão), uma capa";
        nome.textContent = "Morpheu";
    }else if(n == 4){
        document.getElementById("imgnpc").src = "img/Irmãos.png";
        vida.textContent = "Vida: 0";
        defesa.textContent = "Defesa: 0";
        força.textContent = "Força: 7";
        historia.textContent = "Papai e mamae estão nos chamando";
        itens.textContent = "Nada";
        nome.textContent = "Irmãos- MORTOS";
        document.getElementById("imgnpc").style.filter = "grayscale(100%)"
    }else if(n == 5){
        document.getElementById("imgnpc").src = "img/Christopher.png";
        vida.textContent = "Vida: 7";
        defesa.textContent = "Defesa: 8";
        força.textContent = "Força: 5";
        historia.textContent = "Um soldado do vilarejo do tempo e pai de Framtid, morto em um ataque";
        itens.textContent = "Itens: Armadura, espada e escudo";
        nome.textContent = "Christopher - MORTO";
        document.getElementById("imgnpc").style.filter = "grayscale(100%)"
    }else if(n == 6){
        document.getElementById("imgnpc").src = "img/Soldados cemiterio.png";
        vida.textContent = "Vida: 5";
        defesa.textContent = "Defesa: 7";
        força.textContent = "Força: 7";
        historia.textContent = "Soldados com armadura e uma mascara para nunca saberem quem está no rodizio da segurança(evita contrabandos)";
        itens.textContent = "Itens: Armadura, espada e escudo";
        nome.textContent = "Soldados";
        
    }else if(n == 7){
        document.getElementById("imgnpc").src = "img/Jeane.png";
        vida.textContent = "Vida: 2";
        defesa.textContent = "Defesa: 2";
        força.textContent = "Força: 10";
        historia.textContent = "Uma artista magica e mãe de Framtid, morta em um ataque";
        itens.textContent = "Itens: Pincel, Lanterna e quadro";
        nome.textContent = "Jeane- MORTO";
        document.getElementById("imgnpc").style.filter = "grayscale(100%)"
    }else if(n == 8){
        document.getElementById("imgnpc").src = "img/Criança cegueta.png";
        vida.textContent = "Vida: 5";
        defesa.textContent = "Defesa: 0";
        força.textContent = "Força: 0";
        historia.textContent = "Criança que sobreviveu ao ataque dos funcionarios do papa e levada para ser um experimento";
        itens.textContent = "Nada";
        nome.textContent = "Framtid(nome original)|Billie(nome dado pelos jogadores)";
    }
}

