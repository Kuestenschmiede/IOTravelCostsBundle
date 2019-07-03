import {taxiConstantsEnglish} from "./taxi-constant-i18n-en";
import {taxiConstantsGerman} from "./taxi-constant-i18n-de";
const langConstants = {};
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

    findTariffs();
});

/**
 * calls tariffService to fetch informations and pricing about the set tariffs and shows them
 * @returns {void}}
 */
function findTariffs() {
    let url = "con4gis/tariffService/" + window.settingId;
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

            let objHeadlineDistPrice = $(".headline-dist-price");
            objHeadlineDistPrice.html(langConstants.HEADLINE_DIST_PRICE);
            let objHeadlineTimePrice = $(".headline-time-price");
            objHeadlineTimePrice.html(langConstants.HEADLINE_TIME_PRICE);
            let objHeadlineBasePrice = $(".headline-base-price");
            objHeadlineBasePrice.html(langConstants.HEADLINE_BASE_PRICE);
            for (let i in data) {
                if (data.hasOwnProperty(i)) {
                    if (window.displayGrid === "1") {
                        let itemName = document.createElement('div');
                        itemName.innerHTML = i;
                        itemName.className = "grid-item " + rowCount;
                        parent.append(itemName);
                        let itemBasePrice = document.createElement('div');
                        let responseTariff = data[i].basePrice + "0000";
                        responseTariff = responseTariff.replace(".",",");
                        let indexDecimal = responseTariff.indexOf(',') + 3;
                        itemBasePrice.innerHTML = responseTariff.substring(0, indexDecimal) + " €";
                        itemBasePrice.className = "grid-item " + rowCount;
                        parent.append(itemBasePrice);
                        let autoauto = "auto auto";
                        if (data[i]['distPrice'].length > 1) {
                            for (let priceIndex in data[i]['distPrice']) {
                                if (data[i]['distPrice'].hasOwnProperty(priceIndex)) {
                                    let priceElement = data[i]['distPrice'][priceIndex];
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
                                    let itemDistPrice = document.createElement('div');
                                    responseTariff = priceElement['kilometerPrice'] + "0000";
                                    responseTariff = responseTariff.replace(".",",");
                                    indexDecimal = responseTariff.indexOf(',') + 3;
                                    itemDistPrice.innerHTML = responseTariff.substring(0, indexDecimal) + " €";
                                    itemDistPrice.className = "grid-item " + rowCount;
                                    parent.append(itemDistPrice);
                                    autoauto += " auto";
                                }
                            }
                        }
                        else {
                            let itemDistPrice = document.createElement('div');
                            responseTariff = data[i].distPrice[0]['kilometerPrice'] + "0000";
                            responseTariff = responseTariff.replace(".",",");
                            indexDecimal = responseTariff.indexOf(',') + 3;
                            itemDistPrice.innerHTML = responseTariff.substring(0, indexDecimal) + " €";
                            itemDistPrice.className = "grid-item " + rowCount;
                            parent.append(itemDistPrice);
                        }
                        if (data[i].timePrice != 0) {
                            let itemTimePrice = document.createElement('div');
                            responseTariff = data[i].timePrice + "0000";
                            responseTariff = responseTariff.replace(".",",");
                            indexDecimal = responseTariff.indexOf(',') + 3;
                            itemTimePrice.innerHTML = responseTariff.substring(0, indexDecimal) + " €";
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
