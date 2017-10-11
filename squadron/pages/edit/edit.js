(function () {
    "use strict";

    function editclick() {
        WinJS.Navigation.navigate("/pages/user/user3.html");
    }

    WinJS.UI.Pages.define("/pages/edit/edit.html", {
        ready: function (element, options) {
            var editUser = document.getElementById("editUser");          
            editUser.addEventListener("click", editclick, false);
        }
    });
})();