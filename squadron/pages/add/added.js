(function () {
    "use strict";

    function addclick() {
        WinJS.Navigation.navigate('/pages/aircraft/aircraft.html');
    }

    WinJS.UI.Pages.define("/pages/add/added.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var add = document.getElementById("air");
            // TODO: Initialize the page here.
            add.addEventListener("click", addclick, false);
        }
    });
})();