const toggleShow = () => {
  document.querySelector('.coordinates').classList.toggle('show');
};
document.querySelector('.locate').addEventListener('click', () => {
  toggleShow();
});
document.querySelector('.submit-coordinates').addEventListener('click', () => {
  toggleShow();
});
let res;
document.querySelector('.geolocate').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      res = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    });
  } else {
    document.querySelector('.coordinates').innerHTML = 'Geolocation is not supported by this browser.';
    toggleShow();
  }
});
