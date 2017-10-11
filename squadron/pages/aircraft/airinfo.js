(function () {
    "use strict";

    function editclick() {
        WinJS.Navigation.navigate('/pages/edit/editAir.html');
    }

    function delclick() {
        WinJS.Navigation.navigate('/pages/delete/deleteAir.html');
    }

    function addclick() {
        WinJS.Navigation.navigate('/pages/add/addAir.html');
    }

    WinJS.UI.Pages.define("/pages/aircraft/airinfo.html", {
        ready: function (element, options) {
            var editAir = document.getElementById("editAir");
            var delAir = document.getElementById("delAir");
            var addAir = document.getElementById("addAir");
            // TODO: Initialize the page here.
            editAir.addEventListener('click', editclick, false);
            delAir.addEventListener('click', delclick, false);
            addAir.addEventListener('click', addclick, false);
        }
    });
})();