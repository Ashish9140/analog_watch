const music = new Audio('sec.mp3');


// for refreshi8ng 
rotate();

function rotate() {
    let time = new Date();
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();


    let rotateSecond = 6 * seconds;
    let rotateMinute = 6 * minutes;
    let rotateHour = 30 * hours + minutes / 2;

    document.querySelector(".second").style.transform = `rotate(${rotateSecond}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${rotateMinute}deg)`;
    document.querySelector(".hour").style.transform = `rotate(${rotateHour}deg)`;

    music.play();
}

// calling the rotate function
setInterval(rotate, 1000);