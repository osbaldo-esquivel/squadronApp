(function () {
    "use strict";

    function addclick() {
        var name = document.getElementById("name");
        var pwd = document.getElementById("pwd");
        var email = document.getElementById("email");
        var aircraft = document.getElementById("aircraft");

        success();
    }

    function success() {
        var out = document.getElementById("output");
        out.innerText = "Successfully added.";
    }

    WinJS.UI.Pages.define("/pages/add/addAir.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var add = document.getElementById("add");
            // TODO: Initialize the page here.
            add.addEventListener("click", addclick, false);
        }
    });
})();