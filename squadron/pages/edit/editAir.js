(function () {
    "use strict";

    function editclick() {
        WinJS.Navigation.navigate("/pages/user/user3.html");
    }

    WinJS.UI.Pages.define("/pages/edit/editAir.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var edit = document.getElementById("edit");
            edit.addEventListener("click", editclick, false);
        }
    });
})();