$(document).ready(function(){

$(`.javascript`).on("click", function(){
    if (toggleActive = true){
        $(`#css`).hide()
        $(`#html_`).hide()
        $(`#photoshop`).hide()
        $(`#french`).hide()
         toggleActive = false}
    $(`#javascript`).show();
    toggleActive = true;
})

$(`.css`).on("click", function(){
    if (toggleActive = true){
   $(`#javascript`).hide()
   $(`#html_`).hide()
   $(`#photoshop`).hide()
   $(`#french`).hide()
    toggleActive = false}
    $(`#css`).show();
    toggleActive = true;
})

$(`.html_`).on("click", function(){
    if (toggleActive = true){
        $(`#javascript`).hide()
        $(`#css`).hide()
        $(`#photoshop`).hide()
        $(`#french`).hide()
         toggleActive = false}
    $(`#html_`).slideToggle();
    toggleActive = true;
})

$(`.photoshop`).on("click", function(){
    if (toggleActive = true){
        $(`#javascript`).hide()
        $(`#html_`).hide()
        $(`#css`).hide()
        $(`#french`).hide()
         toggleActive = false}
    $(`#photoshop`).slideToggle();
    toggleActive = true;
})

$(`.french`).on("click", function(){
    if (toggleActive = true){
        $(`#javascript`).hide()
        $(`#html_`).hide()
        $(`#photoshop`).hide()
        $(`#css`).hide()
         toggleActive = false}
    $(`#french`).slideToggle();
    toggleActive = true;
})


});