

function scribePopup() {
    $("#scribe-popup").fadeIn();
}

function scribeClose() {
    $("#scribe-popup").fadeOut();
}

function gunbunPopup() {
    $("#gunbun-popup").fadeIn();
}

function gunbunClose() {
    $("#gunbun-popup").fadeOut();
}

function ekjPopup() {
    $("#ekj-popup").fadeIn();
}

function ekjClose() {
    $("#ekj-popup").fadeOut();
}

function kamenPopup() {
    $("#kamen-popup").fadeIn();
}

function kamenClose() {
    $("#kamen-popup").fadeOut();
}

function bumpPopup() {
    $("#bump-popup").fadeIn();
}

function bumpClose() {
    $("#bump-popup").fadeOut();
}

function panglossPopup() {
    $("#pangloss-popup").fadeIn();
}

function panglossClose() {
    $("#pangloss-popup").fadeOut();
}

function lasseterPopup() {
    $("#lasseter-popup").fadeIn();
}

function lasseterClose() {
    $("#lasseter-popup").fadeOut();
}

$(document).ready(function(){
  console.log("JavaScript working")


    L.mapbox.accessToken = 'pk.eyJ1IjoibWJ1ciIsImEiOiJzNGZ3YjlNIn0.zlyTbHIv83SUfBBtpA-yMA';

    var map = L.mapbox.map('map', 'mbur.m5n6g8ln')
        .setView([38.292, -122.612], 9)

        // 
        // Reveal.initialize({
        // controls: true,
        // progress: true,
        // history: true,
        // center: true,
        //
        // transition: 'slide', // none/fade/slide/convex/concave/zoom
        // });



    $('#map').on('click', '.scribe-title', function() {
        scribePopup();
    });

    $('#scribe-popup').on('click', '.close-info', function() {
        scribeClose();
    });

    $('#scribe-popup').on('click', '.add-itinerary', function() {
        // add js to push winery to itinerary list to be saved or directions mapped
        scribeClose();
    });

    $

    // if($('#scribe-popup').is(':visible')) {
    //
    //     $('#map').on('click', function() {
    //         scribeClose();
    //     });
    //
    // }


    $('#map').on('click', '.gunbun-title', function() {
        gunbunPopup();
    });

    $('#gunbun-popup').on('click', '.close-info', function() {
        gunbunClose();
    });

    $('#gunbun-popup').on('click', '.add-itinerary', function() {
        // add js to push winery to itinerary list to be saved or directions mapped
        gunbunClose();
    });


    $('#map').on('click', '.ekj-title', function() {
        ekjPopup();
    });

    $('#ekj-popup').on('click', '.close-info', function() {
        ekjClose();
    });

    $('#ekj-popup').on('click', '.add-itinerary', function() {
        // add js to push winery to itinerary list to be saved or directions mapped
        ekjClose();
    });


    $('#map').on('click', '.kamen-title', function() {
        kamenPopup();
    });

    $('#kamen-popup').on('click', '.close-info', function() {
        kamenClose();
    });

    $('#kamen-popup').on('click', '.add-itinerary', function() {
        // add js to push winery to itinerary list to be saved or directions mapped
        kamenClose();
    });


    $('#map').on('click', '.bump-title', function() {
        bumpPopup();
    });

    $('#bump-popup').on('click', '.close-info', function() {
        bumpClose();
    });

    $('#bump-popup').on('click', '.add-itinerary', function() {
        // add js to push winery to itinerary list to be saved or directions mapped
        bumpClose();
    });


    $('#map').on('click', '.pangloss-title', function() {
        panglossPopup();
    });

    $('#pangloss-popup').on('click', '.close-info', function() {
        panglossClose();
    });

    $('#pangloss-popup').on('click', '.add-itinerary', function() {
        // add js to push winery to itinerary list to be saved or directions mapped
        panglossClose();
    });


    $('#map').on('click', '.lasseter-title', function() {
        lasseterPopup();
    });

    $('#lasseter-popup').on('click', '.close-info', function() {
        lasseterClose();
    });

    $('#lasseter-popup').on('click', '.add-itinerary', function() {
        // add js to push winery to itinerary list to be saved or directions mapped
        lasseterClose();
    });





})
