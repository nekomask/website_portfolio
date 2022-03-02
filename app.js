$(document).ready(function () {

    $(`.javascript`).on("click", function () {
        if (toggleActive = true) {
            $(`#css`).hide()
            $(`#html_`).hide()
            $(`#photoshop`).hide()
            $(`#french`).hide()
            toggleActive = false
        }
        $(`#javascript`).show();
        toggleActive = true;
    })

    $(`.css`).on("click", function () {
        if (toggleActive = true) {
            $(`#javascript`).hide()
            $(`#html_`).hide()
            $(`#photoshop`).hide()
            $(`#french`).hide()
            toggleActive = false
        }
        $(`#css`).show();
        toggleActive = true;
    })

    $(`.html_`).on("click", function () {
        if (toggleActive = true) {
            $(`#javascript`).hide()
            $(`#css`).hide()
            $(`#photoshop`).hide()
            $(`#french`).hide()
            toggleActive = false
        }
        $(`#html_`).show();
        toggleActive = true;
    })

    $(`.photoshop`).on("click", function () {
        if (toggleActive = true) {
            $(`#javascript`).hide()
            $(`#html_`).hide()
            $(`#css`).hide()
            $(`#french`).hide()
            toggleActive = false
        }
        $(`#photoshop`).show();
        toggleActive = true;
    })

    $(`.french`).on("click", function () {
        if (toggleActive = true) {
            $(`#javascript`).hide()
            $(`#html_`).hide()
            $(`#photoshop`).hide()
            $(`#css`).hide()
            toggleActive = false
        }
        $(`#french`).show();
        toggleActive = true;
    })

    const rufus = document.getElementsByClassName("rufus")
    const chatBubble = document.getElementsByClassName(`chat_bubble`);

    $(rufus).click(function () {
        $(chatBubble).text(`Ah, I forgot I am a dog. Well, good luck buddy.`);
        if (french === true) {
            $(chatBubble).text(`Ah, j'oublie que je suis un chien. Bon courage mon pôte.`);
        }
    })

    const FR = document.getElementsByClassName("fr")
    $(FR).click(function(){
    french = true;
    if (french === true){
    $(`.bio`).text(`Je suis né á Mobile, AL (qui était la première colonie de la Louisiane-Française avant être acheté par les États-Unis en 1803.) 
    J'étudias á l'Université de South Alabama où je me suis specialisé en deux sujets-- le français et l'art. 
    En 2012, j'avais la chance étudier á l'étranger a l'Université Paul Valery chez Montpellier, France. 
    Après avoir obtenu mon diplôme, j'étais permi dans le programme TAPIF pour être un assistant d'enseigner l'anglais.  
    Lorsqu'il s'est terminé, je me suis rendu aux États-Unis et finalement me trouvé au San Francisco Bay Area où j'habite hereusement depuis ce-temps lá.`);
    $(rufus).attr("src", "images/rufus_francais.png")
    $(chatBubble).text("Coucou mon pôte, est-ce que vous avez besoin d'assistance pour naviguer mon site?")
    $(`#javascript`).text(`À l'instant, j'avais programmé des jeux en text`)
    $(`#css`).text(`C'est comment je peux styliser le site!`)
    $(`#html_`).text(`HTML, c'est le code principal pour créer les sites web!`)
    $(`#photoshop`).text(`Je fais du Adobe Photoshop pour 20+ ans, en fait je travaillais comme "photo editor" avant avoir demenagé en Californie`)
    $(`#french`).text(`Le capacité de communiquer soit très important! À part des langues informatique, j'utilise deux langues humaines aussi-- le français et l'anglais.`)
    $(`#projets`).text(`Projets`)
    $(`#skill`).text(`Competences`)
    $(`#welcome`).text(`Bienvenue~ :)`)
    $('.projects').text(`C'est où mes projets se trouveront.`)
    }    
})
    

const EN = document.getElementsByClassName("en")
$(EN).click(function(){
french === false;
})














})
