window.addEventListener('scroll', function() {
    var navigation = document.getElementById('navbar');
    if (window.scrollY > 500) { // Adjust the scroll threshold as needed
        navigation.classList.add('fixed-nav');
    } else {
        navigation.classList.remove('fixed-nav');
    }
});


// countdown timer

const countdown = document.querySelector('.countdown');

// set launch date (ms)
const launchDate = new Date('Dec 31, 2023 13:00:00').getTime();

// update every second
const intvl = setInterval(() => {
    // get todays date and time in (ms)
    const now = new Date().getTime();

    // Distance from now to launch date
    const distance = launchDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 *24));
    const hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60 ));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;

    // if launch date past
    if(distance < 0){
        //stop countdown
        clearInterval(intvl);
        //style and output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!';
    }
}, 1000);