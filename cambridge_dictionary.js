// ==UserScript==
// @name         Cambridge Dictionary Fast Navigation
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  papaparam
// @author       Borys Drozhak
// @include      /^https://dictionary.cambridge.org/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.onkeyup = event => {
        if (event.code == "Escape") {
            var modal = document.getElementsByClassName("modal modal--myd js-modal open")[0]; // get modal if it is open
            if (modal)
                modal.querySelector('#modal-login>[data-target-selector]').click(); // click close
            // move cursor to search box and select the text
            var inp = document.getElementById("cdo-search-input");
            inp.focus();
            inp.setSelectionRange(0, inp.value.length);
        }
    };
})();