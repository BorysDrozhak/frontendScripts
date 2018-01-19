// ==UserScript==
// @name         Google Translate Fast Navigation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Borys Drozhak
// @include      /^https:\/\/translate.google\..*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.onkeyup = function(event) {
        if (event.code == "Escape") {
            var inp = document.getElementById("source");
            inp.focus();
            inp.setSelectionRange(0, inp.value.length);
        }
        // if (event.code == "Escape") {
        //     var inp = document.getElementById("gt-swap").click();
        // }
        
    };
})();