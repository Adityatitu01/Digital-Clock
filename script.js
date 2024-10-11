window.onload = () => {
    function buildClock() {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        
        // Format time to always show two digits
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Get elements
        const hoursElement = document.querySelector('#clock-hours');
        const minutesElement = document.querySelector('#clock-minutes');
        const secondsElement = document.querySelector('#clock-seconds');

        // Apply smooth transition effect only if values change
        if (hoursElement.innerText !== hours) {
            hoursElement.innerText = hours;
            hoursElement.classList.add('updated');
            setTimeout(() => hoursElement.classList.remove('updated'), 500);
        }
        
        if (minutesElement.innerText !== minutes) {
            minutesElement.innerText = minutes;
            minutesElement.classList.add('updated');
            setTimeout(() => minutesElement.classList.remove('updated'), 500);
        }

        if (secondsElement.innerText !== seconds) {
            secondsElement.innerText = seconds;
            secondsElement.classList.add('updated');
            setTimeout(() => secondsElement.classList.remove('updated'), 500);
        }

        // Call buildClock every second
        setTimeout(buildClock, 1000);
    }

    buildClock();
};
