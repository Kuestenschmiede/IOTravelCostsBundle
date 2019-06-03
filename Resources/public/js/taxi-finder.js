"use strict";
import {taxiConstantsEnglish} from "./taxi-constant-i18n-en";
import {taxiConstantsGerman} from "./taxi-constant-i18n-de";
import {taxiConstants} from "./taxi-constants.js";

const $ = jQuery;
const langConstants = {};
var arrFromNames = [];
var arrFromPositions = [];
var arrToNames = [];
var arrToPositions = [];
var taxiData = {
    routeFrom: {},
    routeTo: {}
};

let routeFromInput = null;
let routeToInput = null;

/**
 * Saves the string of the start address to the script-scoped variable
 * @param address     String for start address
 * @returns {void}
 */
function setRouteFrom(address) {
    taxiData.routeFrom.adress = address;
}

/**
 * Saves the string of the destination address to the script-scoped variable
 * @param address     String for destination address
 * @returns {void}
 */
function setRouteTo(address) {
    taxiData.routeTo.adress = address;
}

/**
 * Handles the button press for start and tries to calculate the expenses
 * @param coordinates     coordinates from navigator.geolocation
 * @returns {void}
 */
function handleRouteFromPosition(coordinates) {
    handlePosition(coordinates, ".route-from", "routeFrom");
    calculateExpenses();

}

/**
 * Handles the button press for destination and tries to calculate the expenses
 * @param coordinates     coordinates from navigator.geolocation
 * @returns {void}
 */
function handleRouteToPosition(coordinates) {
    handlePosition(coordinates, ".route-to", "routeTo");
    calculateExpenses();
}

/**
 * Converts a distance in meters to a more readable format.
 * @param distanceInMeters     The distance to convert.
 * @returns {string}
 */
function toHumanDistance(distanceInMeters) {

    var distance,
        humanDistance;

    distance = parseInt(distanceInMeters, 10);
    distance = distance / 1000;

    if (distance >= 100) {
        humanDistance = distance.toFixed(0) + '&nbsp;' + 'km';
    } else if (distance >= 10) {
        humanDistance = distance.toFixed(1) + '&nbsp;' + 'km';
    } else if (distance >= 0.1) {
        humanDistance = distance.toFixed(2) + '&nbsp;' + 'km';
    } else {
        humanDistance = (distance * 1000).toFixed(0) + '&nbsp;' + 'm';
    }

    return humanDistance;
}

/**
 * Converts a time in seconds to a more readable format.
 * @param timeInSeconds     The time to convert.
 * @returns {string}
 */
function toHumanTime(timeInSeconds) {

    var seconds,
        minutes,
        hours,
        humanTime;

    seconds = parseInt(timeInSeconds, 10);
    minutes = parseInt(seconds / 60, 10);
    seconds = seconds % 60;

    hours = parseInt(minutes / 60, 10);
    minutes = minutes % 60;

    if (hours === 0 && minutes === 0) {
        humanTime = seconds + '&nbsp;' + 's';
    } else if (hours === 0) {
        humanTime = minutes + '&nbsp;' + 'min';
    } else {
        humanTime = hours + '&nbsp;' + 'h' + '&nbsp;' + minutes + '&nbsp;' + 'min';
    }

    return humanTime;
}

/**
 * Checks wether all params for the calculation of an expense are set and calls the server and displays the repsonse
 * @param
 * @returns {void}
 */
function calculateExpenses () {
    if (taxiData.routeFrom.loc && taxiData.routeTo.loc) {
        let url = "con4gis/expenseService/" + window.settingId + "/" + taxiData.routeFrom.loc[0] + "," + taxiData.routeFrom.loc[1] + ";" + taxiData.routeTo.loc[0] + "," + taxiData.routeTo.loc[1] + "/";
        $.ajax({url: url}).done(function(data) {
            let tableNode = $(".route-output");
            tableNode.css("display", "block");
            $(".response-headline").remove();
            $(".response-value").remove();
            if (data.time) {
                let elementTime = $(".response-time");
                elementTime.html(toHumanTime(data.time));
            }
            if (data.dist) {
                let elementDistance = $(".response-dist");
                let responseDistance = data.dist + "";
                responseDistance = responseDistance.replace('.','.');
                let indexDecimal = responseDistance.indexOf(',') + 3;

                elementDistance.html(responseDistance.substring(0, indexDecimal + 3) + " km");
            }
            let headlindeNode = $(".route-output-headline");
            let responseNode = $(".route-output-values");
            for(let tariffName in data.tariffs) {
                let headlineElement = document.createElement('th');
                headlineElement.innerHTML = tariffName;
                $(headlineElement).addClass("response-headline")
                let responseElement = document.createElement('td');
                let responseTariff = data.tariffs[tariffName] + "";
                responseTariff = responseTariff.replace(".",",");
                let indexDecimal = responseTariff.indexOf(',') + 3;
                responseElement.innerHTML = responseTariff.substring(0, indexDecimal) + " €"
                $(responseElement).addClass("response-value")
                headlindeNode.append(headlineElement);
                responseNode.append(responseElement);
            }
        })
        
    }
}

/**
 * calls reverse-geosearch to set an address-string for coordinates and set it to the script-scoped variable
 * @param coordinates       coordinates from navigator.geolocation
 * @param cssid             css-class to set response-property to
 * @param propName          css-class to set response-property to
 * @returns {void}
 */
function handlePosition(coordinates, cssId, propName) {
    let coords = coordinates.coords;
    // TODO aus modul hier rein geben
    if (window.bBox && window.bBox[0]) {
        if (window.bBox[0] < coords.latitude && coords.latitude < window.bBox[2] && window.bBox[1] < coords.longitude && coords.longitude < window.bBox[3]) {
            if (cssId === ".route-from") {
                taxiData.routeFrom.loc = [coords.latitude, coords.longitude];
            }
            else {
                taxiData.routeTo.loc = [coords.latitude, coords.longitude];
            }
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
                taxiData[propName].adress = address;
            });
        }
        else {
            // @ToDo OutofBounds
        }
    }
    else {
        if (cssId === ".route-from") {
            taxiData.routeFrom.loc = [coords.latitude, coords.longitude];
        }
        else {
            taxiData.routeTo.loc = [coords.latitude, coords.longitude];
        }
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
            taxiData[propName].adress = address;
        });
    }

}

/**
 * calls geosearch to set autocomplete suggestions for an address-string
 * @param input       address-string from input
 * @param cssid       css-class to set response-property to
 * @returns {void}
 */
function handleAdress(input, cssId) {
    let url = window.proxyUrl + "search.php?format=json&key=" + window.keyForward + "&q=" + input;
    $.ajax({url: url}).done(function(data) {
        if(data[0] && data[0].display_name) {
            // $(cssId).val(data[0].display_name);

            for (let i in data) {
                if (data.hasOwnProperty(i)) {
                    if (window.bBox && window.bBox[0]) {
                        if (window.bBox[0] < data[i].lon && data[i].lon < window.bBox[2] && window.bBox[1] < data[i].lat && data[i].lat < window.bBox[3]) {
                            if (cssId === ".route-from") {
                                arrFromNames.push(data[i].display_name);
                                arrFromPositions.push([data[i].lat, data[i].lon]);
                            }
                            else {
                                arrToNames.push(data[i].display_name);
                                arrToPositions.push([data[i].lat, data[i].lon]);
                            }
                        }
                        else {
                            //@ToDo outofbounds
                        }
                    }
                    else {
                        if (cssId === ".route-from") {
                            arrFromNames.push(data[i].display_name);
                            arrFromPositions.push([data[i].lat, data[i].lon]);
                        }
                        else {
                            arrToNames.push(data[i].display_name);
                            arrToPositions.push([data[i].lat, data[i].lon]);
                        }
                    }

                }
            }
            if (cssId === ".route-from") {
                $(cssId).autocomplete({
                    source: arrFromNames
                });
            }
            else {
                $(cssId).autocomplete({
                    source: arrToNames
                });
            }

        }
    })
}

/**
 * calls reverse-geosearch to set coordinates for an address-string and set it to the script-scoped variable
 * @param input       address-string from input
 * @param cssid       css-class to set response-property to
 * @returns {void}}
 */
function submitSearch(input, cssId) {
    let url = window.proxyUrl + "search.php?format=json&key=" + window.keyForward + "&q=" + input;
    $.ajax({url: url}).done(function(data) {

        if (window.bBox && window.bBox[0]) {
            if (window.bBox[0] < data[0].lon && data[0].lon < window.bBox[2] && window.bBox[1] < data[0].lat && data[0].lat < window.bBox[3]) {
            }
        }
        if(data[0] && data[0].display_name) {
            // $(cssId).val(data[0].display_name);
            if (cssId === ".route-to") {
                taxiData.routeTo.loc = [data[0].lat, data[0].lon];
            }
            else {
                taxiData.routeFrom.loc = [data[0].lat, data[0].lon];
            }
            calculateExpenses();
        }
    })
}

/**
 * Initial function to enable user-input to the gui
 * @returns {void}}
 */
 $(document).ready(function() {
     let language = window.navigator.userLanguage || window.navigator.language;
     if (language = "en") {
         $.extend(langConstants, taxiConstantsEnglish)
     }
     else if (language == "de") {
         $.extend(langConstants, taxiConstantsGerman)

     }
     else {
         $.extend(langConstants, taxiConstantsEnglish)
     }
     window.bBox = JSON.parse(window.bBox);
    let objInputFrom = $(".route-to");
    if (objInputFrom[0]) {
        objInputFrom[0].placeholder = langConstants.DUMMY_INPUT;
    }
    let objInputTo = $(".route-from");
    if (objInputTo[0]) {
        objInputTo[0].placeholder = langConstants.DUMMY_INPUT;
    }
    let objHeadlineDist = $(".headline-dist");
    objHeadlineDist.html(langConstants.HEADLINE_DIST);
    let objHeadlineTime = $(".headline-time");
     objHeadlineTime.html(langConstants.HEADLINE_TIME);
    const enterListener = function(event) {
        const scope = this;
        if (event.keyCode === 13) {
            submitSearch($(scope).val(), "." + scope.classList[0]);
        }
        else {
            let currTime = Math.floor(Date.now());
            scope.counter = currTime;
            setTimeout(function(){
                if (scope.counter && scope.counter + 1000 < Math.floor(Date.now())) {
                    delete scope.counter;
                    handleAdress($(scope).val(), "." + scope.classList[0]);
                }
            },1500)
        }

    };

    $(".route-from").on('keydown', enterListener);
    $(".route-from").on('autocompleteselect', function(event, ui){
        let value = ui.item.value;
        let loc = arrFromPositions[arrFromNames.findIndex(danger => danger === value)];
        taxiData.routeFrom.loc = loc;
        calculateExpenses();
    });
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