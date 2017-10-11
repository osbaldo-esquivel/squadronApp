(function () {
    "use strict";

    function displayLocation(position) {
        var lat = position.coordinate.point.position.latitude;
        var long = position.coordinate.point.position.longitude;
        document.getElementById("locate").innerText = "Location (lat,long): " + lat + ", " + long;
    }

    function okclick() {
        WinJS.Navigation.navigate('/pages/aircraft/aircraft.html');
    }

    function editclick() {
        WinJS.Navigation.navigate('/pages/edit/edit.html');
    }

    function deleteclick() {
        WinJS.Navigation.navigate('/pages/delete/delete.html');
    }

    WinJS.UI.Pages.define("/pages/user/user.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var ok = document.getElementById("ok");
            var edit = document.getElementById("edit");
            var deleteUser = document.getElementById("delete");
            var location = new Windows.Devices.Geolocation.Geolocator();
            document.getElementById("locate").addEventListener('click', function (event) {
                location.getGeopositionAsync().then(displayLocation, null);
                event.preventDefault();
            });

            // TODO: Initialize the page here.
            ok.addEventListener('click', okclick, false);
            edit.addEventListener('click', editclick, false);
            deleteUser.addEventListener('click', deleteclick, false);
        }
    });
})();