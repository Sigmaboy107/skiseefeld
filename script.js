document.addEventListener("DOMContentLoaded", function() {
    console.log("Website geladen!");
    fetchWeather();
});

function fetchWeather() {
    const apiKey = "8aa2203e39ec4d8a965161556250202"; // Ersetze mit deinem API-Schlüssel
    const city = "Seefeld in Tirol";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=de`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.current.temp_c);
            const weatherDesc = data.current.condition.text;
            const icon = data.current.condition.icon;

            document.getElementById("wetter-info").innerHTML = `
                <img src="${icon}" alt="Wetter Icon">
                <p>${temperature}°C - ${weatherDesc}</p>
            `;
        })
        .catch(error => {
            console.error("Fehler beim Abrufen der Wetterdaten:", error);
            document.getElementById("wetter-info").innerText = "⚠️ Fehler beim Laden der Wetterdaten.";
        });
}
