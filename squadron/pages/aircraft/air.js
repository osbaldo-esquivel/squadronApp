(function () {
    "use strict";

    function okclick() {
        WinJS.Navigation.navigate('/pages/aircraft/airinfo.html');
    }

    WinJS.UI.Pages.define("/pages/aircraft/aircraft.html", {
        ready: function (element, options) {
            var find = document.getElementById("find");
            // TODO: Initialize the page here.
            find.addEventListener('click', okclick, false);
        }
    });
})();