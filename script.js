document.getElementById('cropForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const ph = parseFloat(document.getElementById('ph').value);
    const season = document.getElementById('season').value;
    let recommendedCrops = '';

    // Determine crops based on pH and season (this is just a basic example)
    if (ph >= 6.0 && ph <= 7.5) {
        if (season === 'spring') {
            recommendedCrops = 'Wheat, Oats';
        } else if (season === 'summer') {
            recommendedCrops = 'Corn, Soybeans';
        } else if (season === 'monsoon') {
            recommendedCrops = 'Barley, Rye';
        } else if (season === 'winter') {
            recommendedCrops = 'Winter Wheat';
        }
    } else if (ph >= 5.0 && ph < 6.0) {
        if (season === 'spring') {
            recommendedCrops = 'Rice, Millet';
        } else if (season === 'summer') {
            recommendedCrops = 'Peanuts, Sorghum';
        } else if (season === 'monsoon') {
            recommendedCrops = 'Sweet Potatoes, Pumpkins';
        } else if (season === 'winter') {
            recommendedCrops = 'Cabbage, Spinach';
        }
    } else {
        recommendedCrops = 'No suitable crops found for the given pH and season.';
    }

    document.getElementById('result').innerText = `Recommended Crops: ${recommendedCrops}`;
});
