import {travelConstantsEnglish} from "./travel-constant-i18n-en";
import {travelConstantsGerman} from "./travel-constant-i18n-de";
const langConstants = {};
const currency = window.currency || '€';

/**
 * Initial function to enable user-input to the gui
 * @returns {void}}
 */
$(document).ready(function() {
    let language = window.serviceLang || window.navigator.userLanguage || window.navigator.language;
    if (language === "en") {
        $.extend(langConstants, travelConstantsEnglish)
    }
    else if (language === "de") {
        $.extend(langConstants, travelConstantsGerman);
    }
    else {
        $.extend(langConstants, travelConstantsEnglish);
    }
    if (window.displayType == "0") {
        findTariffs();
    }
});
function roundToTwo(num) {
    if (typeof num != "float") {
        num =parseFloat(num);
    }
    return num.toFixed(2);
}
/**
 * calls tariffService to fetch informations and pricing about the set tariffs and shows them
 * @returns {void}}
 */
function findTariffs() {
    let url = "con4gis/tariffService/" + window.settingId;
    $.ajax({url:url})
        .done(function (data) {
            let parent = $(".tariff-output");
            if (window.hideDisplay == 0) {
                parent.css('display','grid');
            }
            let rowCount = "row-even";

            let objHeadlineDistPrice = $(".headline-dist-price");
            objHeadlineDistPrice.html(langConstants.HEADLINE_DIST_PRICE);
            let objHeadlineTimePrice = $(".headline-time-price");
            objHeadlineTimePrice.html(langConstants.HEADLINE_TIME_PRICE);
            let objHeadlineBasePrice = $(".headline-base-price");
            objHeadlineBasePrice.html(langConstants.HEADLINE_BASE_PRICE);
            let headlineSet = false;
            for (let i in data) {
                if (data.hasOwnProperty(i)) {
                    let itemName = document.createElement('div');
                    itemName.innerHTML = i;
                    itemName.className = "grid-item " + rowCount;
                    parent.append(itemName);
                    let itemBasePrice = document.createElement('div');
                    if (data[i].basePrice % 1 !== 0) {
                        let responseTariff = roundToTwo(data[i].basePrice);
                        if (window.serviceLang === "de") {
                            responseTariff = responseTariff.replace(".",",");
                        }
                        itemBasePrice.innerHTML = responseTariff + " " + currency;
                    }
                    else {
                        itemBasePrice.innerHTML = data[i].basePrice + " " + currency;
                    }
                    itemBasePrice.className = "grid-item " + rowCount;
                    parent.append(itemBasePrice);
                    let autoauto = "auto auto";
                    if (data[i]['distPrice'].length > 1) {
                        for (let priceIndex in data[i]['distPrice']) {
                            if (data[i]['distPrice'].hasOwnProperty(priceIndex)) {
                                let priceElement = data[i]['distPrice'][priceIndex];
                                if (!headlineSet) {
                                    let headLineHtml = langConstants.HEADLINE_DIST_PRICE + '<br>' + priceElement['name'];
                                    if (priceIndex === "0") {
                                        let objHeadlineDistPrice = $(".headline-dist-price");
                                        objHeadlineDistPrice.html(headLineHtml);
                                    }
                                    else {
                                        let parent = $(".headline-dist-price").last();
                                        let addHeadline = document.createElement('div');
                                        addHeadline.className = "headline-dist-price grid-item";
                                        addHeadline.innerHTML = headLineHtml;
                                        parent.after(addHeadline);
                                    }
                                }

                                let itemDistPrice = document.createElement('div');
                                if (priceElement['kilometerPrice'] % 1 !== 0) {
                                    let responseTariff = roundToTwo(priceElement['kilometerPrice']);
                                    if (window.serviceLang === "de") {
                                        responseTariff = responseTariff.replace(".",",");
                                    }
                                    itemDistPrice.innerHTML = responseTariff + " " + currency;
                                }
                                else {
                                    itemDistPrice.innerHTML = priceElement['kilometerPrice'] + " " + currency;
                                }
                                itemDistPrice.className = "grid-item " + rowCount;
                                parent.append(itemDistPrice);
                                autoauto += " auto";
                            }
                        }
                        headlineSet = true;
                    }
                    else {
                        let itemDistPrice = document.createElement('div');
                        let responseTariff = data[i].distPrice[0]['kilometerPrice'];
                        responseTariff = responseTariff.replace(".",",");
                        let indexDecimal = responseTariff.indexOf(',') + 3;
                        itemDistPrice.innerHTML = responseTariff.substring(0, indexDecimal) + " " + currency;
                        itemDistPrice.className = "grid-item " + rowCount;
                        parent.append(itemDistPrice);
                    }
                    if (data[i].timePrice != 0) {
                        let itemTimePrice = document.createElement('div');
                        if (data[i].timePrice % 1 !== 0) {
                            let responseTariff = data[i].timePrice + "0000";
                            let indexDecimal;
                            if (window.serviceLang === "de") {
                                responseTariff = responseTariff.replace(".",",");
                                indexDecimal = responseTariff.indexOf(',') + 3;
                            }
                            else {
                                indexDecimal = responseTariff.indexOf('.') + 3;
                            }
                            itemTimePrice.innerHTML = responseTariff.substring(0, indexDecimal) + " " + currency;
                        }
                        else {
                            itemTimePrice.innerHTML = data[i].timePrice + " " + currency;
                        }
                        itemTimePrice.className = "grid-item " + rowCount;
                        parent.append(itemTimePrice);
                        rowCount = rowCount === "row-even" ? "row-uneven" : "row-even";
                        autoauto += " auto";

                    }
                    else {
                        $('*').remove('.headline-time-price');
                    }
                    $('.tariff-output').css('grid-template-columns', autoauto);
                }
            }
        }
    );
}
