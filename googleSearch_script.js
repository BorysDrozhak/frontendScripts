// ==UserScript==
// @name         Google Search Fast Navigation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Borys Drozhak
// @include      /^https:\/\/.*google\..*\/search
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.selectedResultId=0;
    function selectResult(newId){
        var els = document.querySelectorAll("h3.r");
        if(newId < 0 || newId >= els.length)
            return;
        var rp = document.getElementById("result-pointer");
        if(rp != null) {
            rp.remove();
        }
        document.selectedResultId = newId;
        var el = els[newId];
        var lnk = el.firstElementChild;
        el.innerHTML = "<div id=\"result-pointer\" style=\"position:absolute;left:-15px;\">&gt;</div>" + el.innerHTML;
        lnk.focus();
    }
    document.onkeyup = function(event) {
        var inp = document.getElementById("lst-ib");
        if (document.activeElement == inp) {
            if (event.code == "Escape")
                inp.blur();
            return;
        }
        if (event.code == "Escape") {
            inp.focus();
            inp.setSelectionRange(0, inp.value.length);
        }
        if (event.code == "ArrowUp") {
            selectResult(document.selectedResultId-1);
        }
        if (event.code == "ArrowDown")
            selectResult(document.selectedResultId+1);
        
        map = {}; // just in case u pressed meta and wanna just enter.
    };
    
    var map = {}; // array for storing several key events. I know it is not ideal solution :)
    onkeydown = function(e){
        e = e || event; // to deal with IE
        map[e.keyCode] = e.type == 'keydown';
        
        var el = document.querySelectorAll("h3.r")[document.selectedResultId];
        var lnk = el.querySelector("a");
        var url = lnk.href;
        if (map[13] && map[91]) { // enter + meta
            // console.log('new tab');
            var win = window.open(url,"_blank");
            win.blur();
            map = {};
            return;
        }
        if (map[13] && !map[91]) { // any enter without meta
                // console.log('enter');
                document.location = url;
                map = {};
        }
};
    selectResult(0);
})();
