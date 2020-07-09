
function currentTime() {
    let date = new Date();
    //let test = date.setHours(2)
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let midDay = "PM"
    midDay = (hour >= 12) ? "PM" : "AM";
    document.getElementById("day").innerText = midDay;

    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);

    hour = updateTime(hour);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);

    document.getElementById("hours").innerText = hour;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    let timeText = document.getElementById('time-alert')
    function showText() {
        let newline = '\r\n';
        if ((hour === 10) && (hour === 10 && minutes <= 59) && (midDay === "AM")) {
            timeText.innerText = ' 10 AM.'+ newline +'Go have your Breakfast';
            
        } if ((hour === 2) && (hour === 2 && minutes <= 59) && (midDay !== "AM")){
            timeText.innerText = ' 2 PM.'+ newline +'Go have your Lunch';
            
        }else if ((hour === 8) && (hour === 8 && minutes <= 59) && (midDay === "AM")){
            timeText.innerText = ' 8 PM.'+ newline +'Go have your Dinner';
        }
    }
    showText();
      

    let t = setTimeout(function(){ currentTime() }, 1000);

    function updateTime(time) {
        if (time < 10) {
            return "0" + time;
        }else {
            return time;
        }
    }  


    
}
currentTime();