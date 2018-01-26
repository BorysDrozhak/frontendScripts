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
        map = {}; // in case there is up, remove map
    };
    var map = {}; // array for storing several key events.
    onkeydown = function(e){
        e = e || event; // to deal with IE
        map[e.keyCode] = e.type == 'keydown';
   
        if (map[13] && map[91]) { // meta + enter
            var swap = document.querySelector('#gt-swap');
            swap.dispatchEvent(new MouseEvent('mousedown'));
            swap.dispatchEvent(new MouseEvent('mouseup'));
            map = {};
            return;
        }
    };
})();