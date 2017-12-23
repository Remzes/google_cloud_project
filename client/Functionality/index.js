$('.nav_link').each(function(id, link){
    $(link).on('click', function(){
        console.log("#" + $(link).attr('data-to'));
        $("#" + $(link).attr('data-to')).ScrollTo({
            duration: 1000,
            durationMode: "all"
        })
    });
});

$('.nav a').each(function(id, link){
    $(link).on('click', function(){
        console.log("#" + $(link).attr('data-to'));
        $("#" + $(link).attr('data-to')).ScrollTo({
            duration: 1000,
            durationMode: "all"
        })
    });
});

$("#to_overview").on("click", function() {
    $("#" + $(this).attr('data-to')).ScrollTo({
        duration: 1000,
        durationMode: "all"
    })
});

function initMap() {
    let uluru = {lat: -25.363, lng: 131.044};
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    let marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}