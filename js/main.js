navigator.geolocation.getCurrentPosition(
    function (position) {
        var ausgabe = "Breitengrad: " + position.coords.latitude + "\n" +
            "Längengrad: " + position.coords.longitude + "\n" +
            "Höhe: " + position.coords.altitude + "\n" +
            "Exaktheit: " + position.coords.accuracy + "\n" +
            "Exaktheit Höhe: " + position.coords.altitudeAccuracy + "\n" +
            "Richtung: " + position.coords.heading + "\n" +
            "Geschwindigkeit: " + position.coords.speed + "\n" +
            "Zeitstempel: " + position.timestamp;
        alert(ausgabe);
    });