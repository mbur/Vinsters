

function loadPopup() {
    $('#vinsters-info').fadeIn();
}

function closeInfo() {
    $("#vinsters-info").fadeOut();
}

function sharePopup() {
    $("#share-popup").fadeIn();
}

function shareClose() {
    $("#share-popup").fadeOut();
}



$(document).ready(function(){

    console.log("JavaScript working")

    $(".plus-info").click(loadPopup);

    $(".share").click(sharePopup);

    $(".share-close").click(shareClose);

    $(".close-info").click(closeInfo);














})
