"use strict";

const $ = jQuery;
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


function setRouteFrom(address) {
    taxiData.routeFrom.adress = address;
}

function setRouteTo(address) {
    taxiData.routeTo.adress = address;
}


function handleRouteFromPosition(coordinates) {
    handlePosition(coordinates, ".route-from", "routeFrom");
    calculateExpenses();

}

function handleRouteToPosition(coordinates) {
    handlePosition(coordinates, ".route-to", "routeTo");
    calculateExpenses();
}
function calculateExpenses () {
    if (taxiData.routeFrom.loc && taxiData.routeTo.loc) {
        let url = "con4gis/expenseService/" + window.settingId + "/" + taxiData.routeFrom.loc[0] + "," + taxiData.routeFrom.loc[1] + ";" + taxiData.routeTo.loc[0] + "," + taxiData.routeTo.loc[1] + "/";
        $.ajax({url: url}).done(function(data) {
            let tableNode = $(".route-output");
            tableNode.css("display", "block");
            $("response-headline").remove();
            $("response-value").remove();
            if (data.time) {
                let elementTime = $(".response-time");
                elementTime.html(data.time);
            }
            if (data.dist) {
                let elementDistance = $(".response-dist");
                elementDistance.html(data.dist);
            }
            let headlindeNode = $(".route-output-headline");
            let responseNode = $(".route-output-values");
            for(let tariffName in data.tariffs) {
                let headlineElement = document.createElement('th');
                headlineElement.innerHTML = tariffName;
                $(headlineElement).addClass("response-headline")
                let responseElement = document.createElement('td');
                responseElement.innerHTML = data.tariffs[tariffName];
                $(responseElement).addClass("response-value")
                headlindeNode.append(headlineElement);
                responseNode.append(responseElement);
            }
        })
        
    }
}

function handlePosition(coordinates, cssId, propName) {
    let coords = coordinates.coords;
    // TODO aus modul hier rein geben
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
function handleAdress(input, cssId) {
    let url = window.proxyUrl + "search.php?format=json&key=" + window.keyForward + "&q=" + input;
    $.ajax({url: url}).done(function(data) {
        if(data[0] && data[0].display_name) {
            // $(cssId).val(data[0].display_name);

            for (let i in data) {
                if (data.hasOwnProperty(i)) {
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
function submitSearch(input, cssId) {
    let url = window.proxyUrl + "search.php?format=json&key=" + window.keyForward + "&q=" + input;
    $.ajax({url: url}).done(function(data) {
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

 $(document).ready(function() {
//     routeFromInput = new CachedInputfield(".route-from", false, "c4g-router-address");
//     routeToInput = new CachedInputfield(".route-to", false, "c4g-router-address");
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