window.addEventListener('scroll', function() {
    var navigation = document.getElementById('navbar');
    if (window.scrollY > 500) { // Adjust the scroll threshold as needed
        navigation.classList.add('fixed-nav');
    } else {
        navigation.classList.remove('fixed-nav');
    }
});