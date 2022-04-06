const countDown = () => {
    const countDate = new Date("May 17, 2023 00:00:00");
    const now = new Date().getTime();
    const gap = countDate - now;
    
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSeconds = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".second").innerHTML = textSeconds;
};
setInterval(countDown, 1000);