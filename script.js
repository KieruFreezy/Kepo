// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('2024-08-31T00:00:00').getTime(); // Set target date

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            countdownElement.innerHTML = "Hari ini adalah hari spesialmu!";
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(distance / (100000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik hingga hari spesialmu berakhir!`;
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

    // Show Message
    const showMessageButton = document.getElementById('showMessage');
    const messageElement = document.getElementById('message');

    showMessageButton.addEventListener('click', function() {
        if (messageElement.style.display === 'none') {
            messageElement.style.display = 'block';
        } else {
            messageElement.style.display = 'none';
        }
    });
});
