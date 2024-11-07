// About Us Popup
const aboutBtn = document.getElementById('aboutBtn');
const aboutPopup = document.getElementById('aboutPopup');
const closeAbout = document.getElementById('closeAbout');

aboutBtn.addEventListener('click', () => {
    aboutPopup.style.display = 'block';
});

closeAbout.addEventListener('click', () => {
    aboutPopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === aboutPopup) {
        aboutPopup.style.display = 'none';
    }
});

// Features Popup
const featuresBtn = document.getElementById('featuresBtn');
const featuresPopup = document.getElementById('featuresPopup');
const closeFeatures = document.getElementById('closeFeatures');

featuresBtn.addEventListener('click', () => {
    featuresPopup.style.display = 'block';
});

closeFeatures.addEventListener('click', () => {
    featuresPopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === featuresPopup) {
        featuresPopup.style.display = 'none';
    }
});
