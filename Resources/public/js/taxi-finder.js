"use strict";
import {CachedInputfield} from "./../../../../../../con4gis/bundles/CoreBundle/Resources/public/js/c4g-cached-inputfield";

const $ = jQuery;

const taxiData = {
    routeFrom: "",
    routeTo: ""
};

let routeFromInput = null;
let routeToInput = null;

function setAreaAddres(address) {
    taxiData.areaAddress = address;
}

function setRouteFrom(address) {
    taxiData.routeFrom = address;
}

function setRouteTo(address) {
    taxiData.routeTo = address;
}


function handleRouteFromPosition(coordinates) {
    handlePosition(coordinates, ".route-from", "routeFrom");
}

function handleRouteToPosition(coordinates) {
    handlePosition(coordinates, ".route-to", "routeTo");
}

function handlePosition(coordinates, cssId, propName) {
    let coords = coordinates.coords;
    // TODO aus modul hier rein geben
    let url = window.proxyUrl + '/reverse.php?key='+ window.keyReverse+'&format=json&lat=' + coords.latitude + '&lon=' + coords.longitude;
    $.ajax({url: url}).done(function(data) {
        let address = "";
        if (data.address.pedestrian) {
            address += data.address.pedestrian + " ";
            if (data.address.house_number) {
                address += data.address.house_number + ", ";
            }
        } else if (data.address.path) {
            address += data.address.path + " ";
            if (data.address.house_number) {
                address += data.address.house_number;
            }
        }
        if (address.length > 0) {
            address += ", ";
        }

        if (data.address.postcode) {
            address += data.address.postcode + " ";
        }
        if (data.address.town) {
            address += data.address.town;
        }
        $(cssId).val(address);
        taxiData[propName] = address;
    });
}
function handleAdress(input, cssId) {
    let url = window.proxyUrl + "search.php?format=json&key=" + window.keyForward + "&q=" + input;
    $.ajax({url: url}).done(function(data) {
        if(data[0] && data[0].display_name) {
            $(cssId).val(data[0].display_name);
        }
    })
}

$(document).ready(function() {
    routeFromInput = new CachedInputfield(".route-from", false, "c4g-router-address");
    routeToInput = new CachedInputfield(".route-to", false, "c4g-router-address");
    const enterListener = function(event) {
        let currTime = Math.floor(Date.now() / 1000);
        if (window.counter && window.counter + 2 < currTime) {
            delete window.counter;
            handleAdress($(this).val(), ".route-from");
        }
        else {
            window.counter = currTime;
        }
    };

    $(".route-from").on('keydown', enterListener);
    $(".route-to").on('keydown', enterListener);

    $(".route-from").on('change', function() {
        let address = $(this).val();
        setRouteFrom(address);
    });

    $(".route-to").on('change', function() {
        let address = $(this).val();
        setRouteTo(address);
    });


    $(".start-search").on('click', function() {
        submitSearch();
    });

    $(".route-from-geolocation").on("click", function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleRouteFromPosition);
        } else {
            console.warn("The geolocation API is not available in your browser. Consider updating it or switching to a newer browser.");
        }
    });

    $(".route-to-geolocation").on("click", function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleRouteToPosition);
        } else {
            console.warn("The geolocation API is not available in your browser. Consider updating it or switching to a newer browser.");
        }
    });
});