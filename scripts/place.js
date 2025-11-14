// FOOTER DATES
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// WEATHER VALUES
const temperature = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind").textContent);

// WINDCHILL FORMULA (°C version)
function calculateWindChill(t, s) {
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(s, 0.16) +
        0.3965 * t * Math.pow(s, 0.16)
    ).toFixed(1);
}

// CONDITIONS FOR VALID WINDCHILL
if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById("windchill").textContent = 
        calculateWindChill(temperature, windSpeed) + " °C";
} else {
    document.getElementById("windchill").textContent = "N/A";
}