(function () {
    "use strict";

    function airclick() {
        WinJS.Navigation.navigate('/pages/aircraft/aircraft.html');
    }

    function deleteClick() {
        var out = document.getElementById("output");
        var name = document.getElementById("name");
        out.innerText = name + " deleted.";
    }

    WinJS.UI.Pages.define("/pages/delete/deleteAir.html", {
        ready: function (element, options) {
            var deleteUser = document.getElementById("delete");
            // TODO: Initialize the page here.
            deleteUser.addEventListener('click', deleteClick, false);
            var air = document.getElementById("airPage");
            air.addEventListener('click', airclick, false);
        }
    });
})();