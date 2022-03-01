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
    $(`.bio`).text(`Je suis ne a Mobile, AL (qui etait la premier colonie de la Louisiana-Francaise avant etre achete par les Etat-Unis.) J'etudias a l'Universite de South Alabama ou je me suis specialise en deux sujets-- le francais et l'art. En 2012, j'avais la chance etudier a l'etranger a l'Universite Paul Valerie chez Montpellier, France. Apres avoir obtenu mon diplome, j'etais permi dans le programme TAPIF a etre un assistant d'enseigner l'anglais.  Lorsqu'il s'est termine, je me suis rendu aux Etats-Unis et me trouver au San Francisco Bay Area ou j'habite hereusement depuis ce-temps la.`);
    $(rufus).attr("src", "images/rufus_francais.png")
    $(chatBubble).text("Coucou mon pôte, est-ce que vous avez besoin d'assistance pour naviger mon site?")
    $(`#javascript`).text(`A l'instant, j'avais programme des jeux en text`)
    $(`#css`).text(`C'est comment je fais de la mode au website!`)
    $(`#html_`).text(`HTML, c'est le code principal pour creer les websites`)
    $(`#photoshop`).text(`Je fais du Adobe Photoshop pour 20+ ans, en fait je travaillais comme "photo editor" avant avoir demenage en Californie`)
    $(`#french`).text(`Le capacite de communiquer soit tres important! A part des langues informatique, j'utilise deux langues humaines aussi-- le francais et l'anglais.`)
    $(`#projets`).text(`Projets`)
    $(`#skill`).text(`Competences`)
    $(`#welcome`).text(`Bienvenue~ :)`)
    }    
})
    

const EN = document.getElementsByClassName("en")
$(EN).click(function(){
french === false;
})














})
