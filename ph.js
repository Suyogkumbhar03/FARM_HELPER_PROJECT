document.getElementById('cropForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const ph = parseFloat(document.getElementById('ph').value);
    const season = document.getElementById('season').value;
    const resultDiv = document.getElementById('result');
    const cropTabsDiv = document.getElementById('cropTabs');
    const cropContentDiv = document.getElementById('cropContent');

    resultDiv.innerHTML = '';  // Clear previous results
    cropTabsDiv.innerHTML = '';  // Clear tabs
    cropContentDiv.innerHTML = '';  // Clear crop info

    // Get crop recommendations based on pH and season
    let crops = getCrops(ph, season);

    if (crops.length === 0) {
        resultDiv.innerHTML = '<p>No crop suggestions available for the given pH and season.</p>';
        return;
    }

    // Create tabs for each recommended crop
    crops.forEach((crop, index) => {
        let tabButton = document.createElement('button');
        tabButton.textContent = crop.name;
        tabButton.classList.add('crop-tab');
        if (index === 0) tabButton.classList.add('active');  // Set first tab as active by default
        tabButton.addEventListener('click', () => displayCropInfo(crop, index));
        cropTabsDiv.appendChild(tabButton);
    });

    // Display the first crop's info by default
    displayCropInfo(crops[0], 0);
});

function getCrops(ph, season) {
    let crops = [];

    // Crop suggestions based on pH and season
    if (ph >= 5 && ph < 6) {
        if (season === 'summer') {
            crops.push({ name: 'शेंगदाणे', description: '\nवाढीचा कालावधी: 120-150 दिवस.\nपाणी आवश्यकता: मध्यम (500-700 मिमी).\nसर्वात चांगला हंगाम: उन्हाळा.\nकीटकनाशक: इमिडाक्लोप्रिड, थायमथोक्झम.' });
        } else if (season === 'monsoon') {
            crops.push({ name: 'तांदूळ', description: '\nवाढीचा कालावधी: 90-150 दिवस\nपाणी आवश्यकता: उच्च (1000-1500 मिमी)\nसर्वात चांगला हंगाम: पावसाळा\nकीटकनाशक: बायोकीट, क्लोरोपायरीफॉस' });
        } else if (season === 'winter') {
            crops.push({ name: 'बटाटे', description: '\nवाढीचा कालावधी: 90-120 दिवस.\nपाणी आवश्यकता: मध्यम (600-800 मिमी).\nसर्वात चांगला हंगाम: हिवाळा.\nकीटकनाशक: मेटालॅक्सिल' });
        }
    } else if (ph >= 6 && ph <= 7.5) {
        if (season === 'summer') {
            crops.push({ name: 'मका', description: '\nवाढीचा कालावधी: 90-120 दिवस.\nपाणी आवश्यकता: उच्च (500-800 मिमी).\nसर्वात चांगला हंगाम: उन्हाळा.\nकीटकनाशक: थायमथोक्झम, इमिडाक्लोप्रिड' });
            crops.push({ name: 'सोयाबीन', description: '\nवाढीचा कालावधी: 90-120 दिवस.\nपाणी आवश्यकता: मध्यम (600-800 मिमी).\nसर्वात चांगला हंगाम: उन्हाळा.\nकीटकनाशक: थायमथोक्झम, इमिडाक्लोप्रिड' });
            crops.push({ name: 'बाजरा', description: '\nवाढीचा कालावधी: 80-100 दिवस.\nपाणी आवश्यकता: कमी (300-400 मिमी).\nसर्वात चांगला हंगाम: उन्हाळा.\nकीटकनाशक: कार्बोफ्युरान, इमिडाक्लोप्रिड' });
        } else if (season === 'monsoon') {
            crops.push({ name: 'तांदूळ', description: '\nवाढीचा कालावधी: 90-150 दिवस.\nपाणी आवश्यकता: उच्च (1000-1500 मिमी).\nसर्वात चांगला हंगाम: पावसाळा.\nकीटकनाशक: बायोकीट, क्लोरोपायरीफॉस' });
            crops.push({ name: 'शेंगदाणे', description: '\nवाढीचा कालावधी: 120-150 दिवस.\nपाणी आवश्यकता: मध्यम (500-700 मिमी).\nसर्वात चांगला हंगाम: पावसाळा.\nकीटकनाशक: इमिडाक्लोप्रिड, थायमथोक्झम' });
        } else if (season === 'winter') {
            crops.push({ name: 'गहू', description: '\nवाढीचा कालावधी: 120-150 दिवस.\nपाणी आवश्यकता: मध्यम (250-500 मिमी).\nसर्वात चांगला हंगाम: हिवाळा.\nकीटकनाशक: आयपीएम, कार्बोफ्युरान' });
            crops.push({ name: 'बटाटे', description: '\nवाढीचा कालावधी: 90-120 दिवस.\nपाणी आवश्यकता: मध्यम (600-800 मिमी).\nसर्वात चांगला हंगाम: हिवाळा.\nकीटकनाशक: मेटालॅक्सिल' });
        }
    }

    return crops;
}

function displayCropInfo(crop, index) {
    const cropTabs = document.querySelectorAll('.crop-tab');
    const cropContentDiv = document.getElementById('cropContent');

    // Remove active class from all tabs
    cropTabs.forEach(tab => tab.classList.remove('active'));

    // Set the clicked tab as active
    cropTabs[index].classList.add('active');

    // Display the crop description
    cropContentDiv.innerHTML = `<h3>${crop.name}</h3><p>${crop.description}</p>`;
}
