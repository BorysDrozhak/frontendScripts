// ==UserScript==
// @name         Google Search Fast Navigation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      /^http[s]?:\/\/.*google\.com.*\/search
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.selectedResultId=0;
    var inp = document.getElementById("lst-ib");
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
        console.log(event);
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
        if (event.code == "Enter") {
            var el = document.querySelectorAll("h3.r")[document.selectedResultId];
            var lnk = el.querySelector("a");
            var url = lnk.href;
            if (event.metaKey) {
                var win = window.open(url,"_blank");
                win.blur();
                return false;
            }
            else {
                document.location = url;
                return false;
            }
        }
    };
    selectResult(0);
})();
