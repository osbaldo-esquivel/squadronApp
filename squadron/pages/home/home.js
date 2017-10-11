(function () {
    "use strict";

    function btnclick() {
        var name = document.getElementById("user");
        var pass = document.getElementById("pwd");
        var out = document.getElementById("output");

        if (name.value == "esquiveo") {
            if (pass.value == "test123") {
                WinJS.Navigation.navigate('/pages/user/user.html');
            }
            else {
                out.innerText = "Invalid password";
            }
        }
        else if (name.value == "roach") {
            if (pass.value == "test") {
                WinJS.Navigation.navigate('/pages/user/user2.html');
            }
            else {
                out.innerText = "Invalid password";
            }
        }
        else {
            out.innerText = "That username/password is not valid";
        }
    }

    function addclick() {
        WinJS.Navigation.navigate('/pages/add/add.html');
    }

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var butt = document.getElementById("butt");
            var add = document.getElementById("add");

            // TODO: Initialize the page here.
            butt.addEventListener('click', btnclick, false);
            add.addEventListener('click', addclick, false);
        }
    });
})();