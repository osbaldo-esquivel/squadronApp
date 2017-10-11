(function () {
    "use strict";

    function okclick() {
        WinJS.Navigation.navigate('/pages/aircraft/aircraft.html');
    }

    function editclick() {
        WinJS.Navigation.navigate("/pages/edit/edit.html");
    }

    function deleteclick() {
        WinJS.Navigation.navigate("/pages/delete/delete.html");
    }

    WinJS.UI.Pages.define("/pages/user/user3.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var ok = document.getElementById("ok");
            var edit = document.getElementById("edit");
            var deleteUser = document.getElementById("delete");
            // TODO: Initialize the page here.
            ok.addEventListener('click', okclick, false);
            edit.addEventListener('click', editclick, false);
            deleteUser.addEventListener('click', deleteclick, false);
        }
    });
})();