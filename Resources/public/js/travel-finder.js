"use strict";
import {travelConstantsEnglish} from "./travel-constant-i18n-en";
import {travelConstantsGerman} from "./travel-constant-i18n-de";
import {AlertHandler} from "./../../../../CoreBundle/Resources/public/js/AlertHandler";

const $ = jQuery;
const langConstants = {};
const objSettings = window.objSettings;
var arrFromNames = [];
var arrFromPositions = [];
var arrToNames = [];
var arrToPositions = [];
var travelData = {
  routeFrom: {},
  routeTo: {}
};

function roundToTwo(num) {
  if (typeof num != "float") {
    num = parseFloat(num);
  }
  return num.toFixed(2);
}
/**
 * Saves the string of the start address to the script-scoped variable
 * @param address     String for start address
 * @returns {void}
 */
function setRouteFrom(address) {
  travelData.routeFrom.adress = address;
}

/**
 * Saves the string of the destination address to the script-scoped variable
 * @param address     String for destination address
 * @returns {void}
 */
function setRouteTo(address) {
  travelData.routeTo.adress = address;
}

/**
 * Handles the button press for start and tries to calculate the expenses
 * @param coordinates     coordinates from navigator.geolocation
 * @returns {void}
 */
function handleRouteFromPosition(coordinates) {
  handlePosition(coordinates, ".route-from", "routeFrom");
  if (!objSettings.submitButton) {
    calculateExpenses();
  }

}

/**
 * Handles the button press for destination and tries to calculate the expenses
 * @param coordinates     coordinates from navigator.geolocation
 * @returns {void}
 */
function handleRouteToPosition(coordinates) {
  handlePosition(coordinates, ".route-to", "routeTo");
  if (!objSettings.submitButton) {
    calculateExpenses();
  }
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
 * calls reverse-geosearch to set an address-string for coordinates and set it to the script-scoped variable
 * @param coordinates       coordinates from navigator.geolocation
 * @param cssId             css-class to set response-property to
 * @param propName          css-class to set response-property to
 * @returns {void}
 */
function handlePosition(coordinates, cssId, propName) {
  let coords = coordinates.coords;
  // check bounds
  if (objSettings.bBox && objSettings.bBox[0]) {
    if (!isInBoundingBox(coords.longitude, coords.latitude)) {
      let alertHandler = new AlertHandler();
      alertHandler.showInfoDialog(langConstants.ERROR, langConstants.POSITION_OUT_OF_BOUNDS);
      return;
    }
  }
  if (cssId === ".route-from") {
    travelData.routeFrom.loc = [coords.latitude, coords.longitude];
  }
  else {
    travelData.routeTo.loc = [coords.latitude, coords.longitude];
  }
  let url = objSettings.proxyUrl + 'reverse.php?key='+ objSettings.keyReverse+'&format=json&lat=' + coords.latitude + '&lon=' + coords.longitude;
  $.ajax({url: url}).done(function(data) {
    let address = parseAddressString(data);
    $(cssId).val(address);
    travelData[propName].adress = address;
  });
}

function parseAddressString(data) {
  let address = "";
  if (data.address) {
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
  }
  if (address === "" && data.display_name) {
    address = data.display_name;
  }
  return address;
}

/**
 * calls geosearch to set autocomplete suggestions for an address-string
 * @param input       address-string from input
 * @param cssId       css-class to set response-property to
 * @returns {void}
 */
function autocompleteAddress(input, cssId) {
  let center;
  if (objSettings.center) {
    center = objSettings.center[0] + "," + objSettings.center[1];
  }
  else {
    center = (parseFloat(objSettings.bBox[0]) + parseFloat(objSettings.bBox[2])) / 2 + "," + (parseFloat(objSettings.bBox[1]) + parseFloat(objSettings.bBox[3])) / 2;
  }
  let url = objSettings.proxyUrl + "autocomplete.php?format=json&key=" + objSettings.keyAutocomplete + "&q=" + input +"&center=" + center;
  $.ajax({url: url}).done(function(data) {
    let center;
    if (objSettings.center) {
      center = objSettings.center;
    }
    else {
      center = [(parseFloat(objSettings.bBox[0]) + parseFloat(objSettings.bBox[2])) / 2, (parseFloat(objSettings.bBox[1]) + parseFloat(objSettings.bBox[3])) / 2];
    }
    if (data.length > 0) {

      if (data[0] && data[0].display_name) {
        // $(cssId).val(data[0].display_name);
        let arrAddresses = [];
        for (let i in data) {
          if (data.hasOwnProperty(i)) {
            if (objSettings.bBox && objSettings.bBox[0]) {
              if (isInBoundingBox(data[i].lon, data[i].lat)) {
                let distance = Math.sqrt((center[0] - data[i].lon) * (center[0] - data[i].lon) + (center[1] - data[i].lat) * (center[1] - data[i].lat));
                let element = {
                  'dist' : distance,
                  'pos'  : [data[i].lat, data[i].lon],
                  'name' : data[i].display_name
                };
                arrAddresses.push(element);
              }
            }
          }
        }
        arrAddresses.sort((a,b) => a.dist -b.dist);

        for (let i in arrAddresses) {
          if (arrAddresses.hasOwnProperty(i)) {
            if (cssId === ".route-from") {
              // do not add twice
              if (!arrFromNames.includes(arrAddresses[i].name)) {
                arrFromNames.push(arrAddresses[i].name);
                arrFromPositions.push(arrAddresses[i].pos);
              }
            }
            else {
              if (!arrToNames.includes(arrAddresses[i].name)) {
                arrToNames.push(arrAddresses[i].name);
                arrToPositions.push(arrAddresses[i].pos);
              }
            }
          }
        }
        // trigger keydown event to show autocomplete options
        let event = jQuery.Event("keydown", {keyCode: 8});
        $(cssId).trigger(event);
      }
    }
  });
}

/**
 * Checks if the given coordinates are within the bbox specified in objSettings.bBox.
 * @param longitude
 * @param latitude
 * @returns {boolean}
 */
function isInBoundingBox(longitude, latitude) {
  if (typeof longitude === "string") {
    longitude = parseFloat(longitude);
  }
  if (typeof latitude === "string") {
    latitude = parseFloat(latitude);
  }
  if (objSettings.bBox[0] < longitude &&
    longitude < objSettings.bBox[2] &&
    objSettings.bBox[1] < latitude &&
    latitude < objSettings.bBox[3]) {
    return true;
  } else {
    return false;
  }
}

/**
 * calls reverse-geosearch to set coordinates for an address-string and set it to the script-scoped variable
 * @param input       address-string from input
 * @param cssId       css-class to set response-property to
 * @returns {void}}
 */
function submitSearch(input, cssId) {
  let url = objSettings.proxyUrl + "search.php?format=json&key=" + objSettings.keyForward + "&q=" + $(input).val();
  $.ajax({url: url}).done(function(data) {
    let falseResponse = false;
    if (data.length > 0) {
      if (objSettings.bBox && objSettings.bBox[0]) {
        if (!isInBoundingBox(data[0].lon, data[0].lat)) {
          falseResponse = objSettings.errMsgBounds || langConstants.ERROR_OUT_OF_BOUNDS;
        }
      }

      if (data[0] && data[0].display_name && !falseResponse) {
        if (cssId === ".route-to") {
          travelData.routeTo.loc = [data[0].lat, data[0].lon];
        }
        else {
          travelData.routeFrom.loc = [data[0].lat, data[0].lon];
        }
        if (travelData.routeFrom.loc.length > 0 && travelData.routeTo.loc.length > 0) {
          if (!objSettings.submitButton) {
            calculateExpenses();
          }
        }
      }
    }
    else {
      falseResponse = objSettings.errMsgNotFound || langConstants.ERROR_FALSE_ADDRESS;
    }
    if (falseResponse) {
      let alertHandler = new AlertHandler();
      alertHandler.showInfoDialog(langConstants.ERROR, falseResponse);
    }
  })
      .fail(function(){
        let alertHandler = new AlertHandler();
        alertHandler.showInfoDialog(langConstants.ERROR, objSettings.errMsgNotFound || langConstants.ERROR_FALSE_ADDRESS);
      });

}


/**
 * Checks whether all params for the calculation of an expense are set and calls the server and displays the repsonse
 * @returns {void}
 */
function calculateExpenses () {
  if (travelData.routeFrom.loc && travelData.routeTo.loc) {
    let url = "con4gis/expenseService/" + objSettings.settingId + "/" + travelData.routeFrom.loc[0] + "," + travelData.routeFrom.loc[1] + ";" + travelData.routeTo.loc[0] + "," + travelData.routeTo.loc[1];
    $.ajax({url: url}).done(function(data) {
      let tableNode = $(".route-output");
      if (objSettings.displayGrid === 1) {
        tableNode.css("display", "grid");
        $(".response-headline").remove();
        $(".response-value").remove();
        if (data.time) {
          let elementTime = $(".response-time");
          elementTime.html(toHumanTime(data.time));
        }
        if (data.dist) {
          let elementDistance = $(".response-dist");
          let responseDistance = toHumanDistance(data.dist * 1000);
          elementDistance.html(responseDistance);
        }
        let insertAfterHead = $(".headline-time");
        let insertAfterVal = $(".response-time");
        let autoAuto = "auto auto ";
        for(let tariffName in data.tariffs) {
          let nodeName = $(document.createElement('div'));
          nodeName.html(tariffName);
          nodeName.addClass("response-headline");
          nodeName.addClass("grid-item");
          nodeName.insertAfter(insertAfterHead);
          insertAfterHead = nodeName;
          let responseElement = $(document.createElement('div'));
          let responseTariff = roundToTwo(data.tariffs[tariffName]) + "";
          if (objSettings.lang === "de") {
            responseTariff = responseTariff.replace(".",",");
          }
          responseElement.html(responseTariff + " €");
          responseElement.addClass("response-value");
          responseElement.addClass("grid-item");
          responseElement.insertAfter(insertAfterVal);
          insertAfterVal = responseElement;
          autoAuto += "auto ";
        }
        tableNode.css("grid-template-columns", autoAuto);
      }
      else {
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
          if (data.tariffs.hasOwnProperty(tariffName)) {
            let headlineElement = document.createElement('th');
            headlineElement.innerHTML = tariffName;
            $(headlineElement).addClass("response-headline");
            let responseElement = document.createElement('td');
            let responseTariff = data.tariffs[tariffName] + "";
            responseTariff = responseTariff.replace(".",",");
            let indexDecimal = responseTariff.indexOf(',') + 3;
            responseElement.innerHTML = responseTariff.substring(0, indexDecimal) + " €";
            $(responseElement).addClass("response-value");
            headlindeNode.append(headlineElement);
            responseNode.append(responseElement);
          }
        }
      }
      if(objSettings.hideDisplay) {
        let tariffs = $(".tariff-output");
        if (window.displayGrid === "1") {
          tariffs.css('display','grid');
        }
        else {
          tariffs.css('display','block');
        }
      }
    })
  }
}

/**
 * Initial function to enable user-input to the gui
 * @returns {void}}
 */
$(document).ready(function() {
  let language = objSettings.lang || window.navigator.userLanguage || window.navigator.language;
  if (language === "en") {
    $.extend(langConstants, travelConstantsEnglish)
  }
  else if (language === "de") {
    $.extend(langConstants, travelConstantsGerman);
  }
  else {
    $.extend(langConstants, travelConstantsEnglish);
  }
  let objInputFrom = $(".route-from");
  if (objInputFrom[0]) {
    objInputFrom[0].placeholder = objSettings.searchPlaceholder || langConstants.DUMMY_INPUT;
  }
  let objInputTo = $(".route-to");
  if (objInputTo[0]) {
    objInputTo[0].placeholder = objSettings.searchPlaceholder || langConstants.DUMMY_INPUT;
  }
  let objHeadlineDist = $(".headline-dist");
  objHeadlineDist.html(langConstants.HEADLINE_DIST);
  let objHeadlineTime = $(".headline-time");
  objHeadlineTime.html(langConstants.HEADLINE_TIME);

  // submits search on "enter", autocompletes address after 0.5 seconds otherwise
  const enterListener = function(event) {
    const scope = this;
    if (event.keyCode === 13) {
      submitSearch(scope, "." + scope.classList[0]);
    } else if (event.keyCode === 8 || (event.keyCode >= 37 && event.keyCode <= 40) || event.keyCode === 9) {
      // event.stopPropagation();
      // event.preventDefault();
    } else {
      if ($(scope).val().length == 0 && !event.keyCode) {
        let tableNode = $(".route-output");
        let cssClass = scope.classList[0];
        if (cssClass === "route-from") {
          travelData.routeFrom = {};
          arrFromNames = [];
          arrFromPositions = [];
        }
        else if (cssClass === "route-to"){
          travelData.routeTo = {};
          arrToNames = [];
          arrToPositions = [];
        }
        else{
          console.log("This is weird");
        }
        tableNode.css("display","none");
      }
      else {
        let currTime = Math.floor(Date.now());
        scope.counter = currTime;
        setTimeout(function() {
          if (scope.counter && scope.counter + 400 < Math.floor(Date.now())) {
            delete scope.counter;
            autocompleteAddress($(scope).val(), "." + scope.classList[0]);
          }
        },500);
      }
    }
  };

  objInputFrom.autocomplete({
    source: arrFromNames
  });
  objInputFrom.on('keydown', enterListener);
  if (objSettings.delButton) {
    objInputFrom.on('search', enterListener);
  }
  objInputFrom.on('autocompleteselect', function(event, ui){
    let value = ui.item.value;
    travelData.routeFrom.loc = arrFromPositions[arrFromNames.findIndex(
      danger => danger === value
    )];
    if (!objSettings.submitButton) {
      calculateExpenses();
    }
  });

  objInputTo.autocomplete({
    source: arrToNames
  });
  objInputTo.on('keydown', enterListener);
  objInputTo.on('autocompleteselect', function(event, ui){
    let value = ui.item.value;
    travelData.routeTo.loc = arrToPositions[arrToNames.findIndex(
      danger => danger === value
    )];
    if (!objSettings.submitButton) {
      calculateExpenses();
    }
  });

  objInputFrom.on('change', function() {
    let address = $(this).val();
    setRouteFrom(address);
  });

  objInputTo.on('change', function() {
    let address = $(this).val();
    setRouteTo(address);
  });
  if (objSettings.submitButton) {
    let submitButton = document.getElementById('btn-submit-expense-calc');
    submitButton.innerText = langConstants.START_SEARCH;
    $(submitButton).on('click', function() {
      if (travelData.routeFrom.loc && travelData.routeTo.loc) {
        calculateExpenses();
      }
      else {
        travelData.routeFrom.loc = [];
        travelData.routeTo.loc = [];
        submitSearch(objInputFrom, ".route-from");
        submitSearch(objInputTo, ".route-to");    }
    });
  }

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

  let objHeadlineDistPrice = $(".headline-dist-price");
  objHeadlineDistPrice.html(langConstants.HEADLINE_DIST_PRICE);
  let objHeadlineTimePrice = $(".headline-time-price");
  objHeadlineTimePrice.html(langConstants.HEADLINE_TIME_PRICE);
  let objHeadlineBasePrice = $(".headline-base-price");
  objHeadlineBasePrice.html(langConstants.HEADLINE_BASE_PRICE);
});