// ==UserScript==
// @name         Cambridge Dictionary Fast Navigation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  papaparam
// @author       Borys Drozhak
// @include      /^https://dictionary.cambridge.org/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.onkeyup = function(event) {
        if (event.code == "Escape") {
            var inp = document.getElementById("cdo-search-input");
            inp.focus();
            inp.setSelectionRange(0, inp.value.length);
        }
        // if (event.code == "Escape") {
        //     var inp = document.getElementById("gt-swap").click();
        // }
        
    };
})();