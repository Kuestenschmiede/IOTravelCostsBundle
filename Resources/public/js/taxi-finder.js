"use strict";
import {taxiConstantsEnglish} from "./taxi-constant-i18n-en";
import {taxiConstantsGerman} from "./taxi-constant-i18n-de";
import {taxiConstants} from "./taxi-constants.js";
import {AlertHandler} from "./../../../../CoreBundle/Resources/public/js/AlertHandler";

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
 * calls reverse-geosearch to set an address-string for coordinates and set it to the script-scoped variable
 * @param coordinates       coordinates from navigator.geolocation
 * @param cssId             css-class to set response-property to
 * @param propName          css-class to set response-property to
 * @returns {void}
 */
function handlePosition(coordinates, cssId, propName) {
  let coords = coordinates.coords;
  // check bounds
  if (window.bBox && window.bBox[0]) {
    if (!isInBoundingBox(coords.longitude, coords.latitude)) {
      // @ToDo OutofBounds
      return;
    }
  }
  if (cssId === ".route-from") {
    taxiData.routeFrom.loc = [coords.latitude, coords.longitude];
  }
  else {
    taxiData.routeTo.loc = [coords.latitude, coords.longitude];
  }
  let url = window.proxyUrl + '/reverse.php?key='+ window.keyReverse+'&format=json&lat=' + coords.latitude + '&lon=' + coords.longitude;
  $.ajax({url: url}).done(function(data) {
    let address = parseAddressString(data);
    $(cssId).val(address);
    taxiData[propName].adress = address;
  });
}

function parseAddressString(data) {
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
  return address;
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
    if (data.length > 0) {

      if (data[0] && data[0].display_name) {
        // $(cssId).val(data[0].display_name);

        for (let i in data) {
          if (data.hasOwnProperty(i)) {
            if (window.bBox && window.bBox[0]) {
              if (!isInBoundingBox(data[i].lon, data[i].lat)) {
                //@ToDo outofbounds
                continue;
              }
            }
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
    }
    else {
    }
  })
}

/**
 * Checks if the given coordinates are within the bbox specified in window.bBox.
 * @param longitude
 * @param latitude
 */
function isInBoundingBox(longitude, latitude) {
  if (window.bBox[0] < longitude &&
    longitude < window.bBox[2] &&
    window.bBox[1] < latitude &&
    latitude < window.bBox[3]) {
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
  let url = window.proxyUrl + "search.php?format=json&key=" + window.keyForward + "&q=" + $(input).val();
  $.ajax({url: url}).done(function(data) {
    let falseResponse = false;
    if (data.length > 0) {
      if (window.bBox && window.bBox[0]) {
        if (!isInBoundingBox(data[0].lon, data[0].lat)) {
          falseResponse = langConstants.ERROR_OUT_OF_BOUNDS;
        }
      }

      if (data[0] && data[0].display_name && !falseResponse) {
        if (cssId === ".route-to") {
          taxiData.routeTo.loc = [data[0].lat, data[0].lon];
        }
        else {
          taxiData.routeFrom.loc = [data[0].lat, data[0].lon];
        }
        calculateExpenses();
      }
    }
    else {
      falseResponse = langConstants.ERROR_FALSE_ADDRESS;
    }
    if (falseResponse) {
      let alertHandler = new AlertHandler();
      alertHandler.showInfoDialog(langConstants.ERROR, falseResponse);
    }
  })

}

/**
 * calls tariffService to fetch informations and pricing about the set tariffs and shows them
 * @returns {void}}
 */
function findTariffs() {
  let url = "con4gis/tariffService/" + window.settingId + "/";
  $.ajax({url:url})
    .done(function (data) {
      let parent = $(".tariff-output");
      if (window.displayGrid === "1") {
        parent.css('display','grid');
      }
      else {
        parent.css('display','block');
      }
      let rowCount = "row-even";
      for (let i in data) {
        if (data.hasOwnProperty(i)) {
          if (window.displayGrid === "1") {
            let itemName = document.createElement('div');
            itemName.innerHTML = i;
            itemName.className = "grid-item " + rowCount;
            parent.append(itemName);
            let itemBasePrice = document.createElement('div');
            itemBasePrice.innerHTML = data[i].basePrice;
            itemBasePrice.className = "grid-item " + rowCount;
            parent.append(itemBasePrice);
            let itemDistPrice = document.createElement('div');
            itemDistPrice.innerHTML = data[i].distPrice;
            itemDistPrice.className = "grid-item " + rowCount;
            parent.append(itemDistPrice);
            let itemTimePrice = document.createElement('div');
            itemTimePrice.innerHTML = data[i].timePrice;
            itemTimePrice.className = "grid-item " + rowCount;
            parent.append(itemTimePrice);
            rowCount = rowCount === "row-even" ? "row-uneven" : "row-even";
          }
          else {
            let elementRow = document.createElement('tr');
            elementRow.innerHTML = "<th>" + i + "</th>" + "<td>"+ data[i].basePrice + "€</td>" + "<td>"+ data[i].distPrice + "€</td>" + "<td>" + data[i].timePrice + "€</td>"
            parent.append(elementRow);
          }
        }
      }
    }
  );
}

function showAdressError(errorText) {
  let errorDiv = document.createElement('div');
  $(errorDiv).addClass('contentError');
  $(errorDiv).addClass('contentHeadline');

  let errorLabel = document.createElement('label');
  errorLabel.innerHTML = errorText;
  errorDiv.appendChild(errorLabel);
  let buttonClose = document.createElement('button');
  $(buttonClose).addClass(taxiConstants.POPUP_CLOSE);
  $(buttonClose).addClass(taxiConstants.ICON);
  $(buttonClose).on('click', function () {
      $(this).parent().remove();
    }
  );
  errorDiv.appendChild(buttonClose);
  return errorDiv;
}

/**
 * Checks whether all params for the calculation of an expense are set and calls the server and displays the repsonse
 * @returns {void}
 */
function calculateExpenses () {
  if (taxiData.routeFrom.loc && taxiData.routeTo.loc) {
    let url = "con4gis/expenseService/" + window.settingId + "/" + taxiData.routeFrom.loc[0] + "," + taxiData.routeFrom.loc[1] + ";" + taxiData.routeTo.loc[0] + "," + taxiData.routeTo.loc[1] + "/";
    $.ajax({url: url}).done(function(data) {
      let tableNode = $(".route-output");
      if (window.displayGrid === "1") {
        tableNode.css("display", "grid");
        $(".response-headline").remove();
        $(".response-value").remove();
        if (data.time) {
          let elementTime = $(".response-time");
          elementTime.html(toHumanTime(data.time));
        }
        if (data.dist) {
          let elementDistance = $(".response-dist");
          let responseDistance = data.dist + "";
          // TODO replace . with . ?
          responseDistance = responseDistance.replace('.','.');
          let indexDecimal = responseDistance.indexOf(',') + 3;
          elementDistance.html(responseDistance.substring(0, indexDecimal + 3) + " km");
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
          let responseTariff = data.tariffs[tariffName] + "";
          responseTariff = responseTariff.replace(".",",");
          let indexDecimal = responseTariff.indexOf(',') + 3;
          responseElement.html(responseTariff.substring(0, indexDecimal) + " €");
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
    })
  }
}

/**
 * Initial function to enable user-input to the gui
 * @returns {void}}
 */
$(document).ready(function() {
  let language = window.serviceLang || window.navigator.userLanguage || window.navigator.language;
  if (language === "en") {
    $.extend(langConstants, taxiConstantsEnglish)
  }
  else if (language === "de") {
    $.extend(langConstants, taxiConstantsGerman);
  }
  else {
    $.extend(langConstants, taxiConstantsEnglish);
  }
  window.bBox = JSON.parse(window.bBox);
  // TODO what? Should be swapped or not?
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

  // submits search on "enter", autocompletes address after 1.5 seconds otherwise
  const enterListener = function(event) {
    const scope = this;
    if (event.keyCode === 13) {
      submitSearch(scope, "." + scope.classList[0]);
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
  let objHeadlineDistPrice = $(".headline-dist-price");
  objHeadlineDistPrice.html(langConstants.HEADLINE_DIST_PRICE);
  let objHeadlineTimePrice = $(".headline-time-price");
  objHeadlineTimePrice.html(langConstants.HEADLINE_TIME_PRICE);
  let objHeadlineBasePrice = $(".headline-base-price");
  objHeadlineBasePrice.html(langConstants.HEADLINE_BASE_PRICE);
  findTariffs();
});