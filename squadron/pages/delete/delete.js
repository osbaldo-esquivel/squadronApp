(function () {
    "use strict";

    function airclick() {
        WinJS.Navigation.navigate('/pages/aircraft/aircraft.html');
    }

    function deleteClick() {
        var name = document.getElementById("name");
        out.innerText = name + " deleted.";
    }

    WinJS.UI.Pages.define("/pages/delete/delete.html", {
        ready: function (element, options) {
            var out = document.getElementById("output");
            var deleteUser = document.getElementById("delete");
            // TODO: Initialize the page here.
            deleteUser.addEventListener('click', deleteClick, false);
            var air = document.getElementById("airPage");
            air.addEventListener('click', airclick, false);
        }
    });
})();