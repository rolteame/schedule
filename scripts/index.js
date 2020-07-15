
let currentTime = function currentTime() {
    let date = new Date();//Date Constructor
    //let test = date.setHours(8);
    let hour = date.getHours();//get hours from date
    let minutes = date.getMinutes();//get minutes from date
    let seconds = date.getSeconds();//get seconds from date

    let midDay = "PM";
    ////midDay = (hour >= 12) ? "PM" : "AM";// AM or PM identifier

    hour = (hour === 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);// setting clock o 12 Hour clock

    //function updateTime(time) {
    //    if (time < 10) {
    //        return "0" +time;
    //    }else {
    //        return time;
    //    }
    //}
    //hour = updateTime(hour);
    //minutes = updateTime(minutes);
    //seeconds= updateTime(seconds);

    let t = setTimeout(function(){ currentTime() }, 1000);//clock reloader to get current time

    document.getElementById('hours').innerText = hour;//send data to HTML
    document.getElementById('minutes').innerText = minutes;//send data to HTML
    document.getElementById('seconds').innerText = seconds;//send data to HTML
    document.getElementById('day').innerText = midDay;//send data to HTML


    function show() {
        let textHead = document.getElementById('time-text-head');
        let timeText = document.getElementById('time-alert');
        let showImages = document.getElementById('default');
        //let breakfastImage = document.getElementById('breakfast');
        
        //console.log(breakfastImage);

            if ((hour === 10) && (hour === 10 && minutes <= 59) && (midDay === "AM")) {
                showImages.src = "./images/breakfast.jpg";
                timeText.innerText = ' 10 AM. Go have your Breakfast';   
            }else if ((hour === 2) && (hour === 2 && minutes <= 59) && (midDay === "PM")){
                timeText.innerText = ' 2 PM. Go have your Lunch';
                showImages.src = "./images/lunch.jpeg";
            }else if ((hour === 8) && (hour === 8 && minutes <= 59) && (midDay === "PM")){
                timeText.innerText = ' 8 PM. Go have your Dinner';
                showImages.src = "./images/dinner.jpg";
            }else {
                textHead.innerText = "This is the time to code";
            }  
    }
    show();

        let formData = [];//form data array to parse to JSON
        let getFormData = (event) => {
            event.preventDefault();// prevent Form default behaviour

            //Recieve content from Form Input
            let formContent = {
                timeToEat : document.getElementById('timeToEat').value,
                foodToEat : document.getElementById('foodToEat').value,
                foodType : document.getElementById('foodType').value
            }
            formData.push(formContent);
            document.querySelector('form').reset();
            

            //send JSON to local storage
            let formJSON = localStorage.setItem('myFoodSchedule', JSON.stringify(formData));
            alert('Your Food Schedule has been entered');

            //retrive JSONDATA and send to table
            let data = JSON.parse(localStorage.getItem('myFoodSchedule'));
            //console.log(data);
            let table = "";
            
            function populateTable() {
                for(let i = 0; i < data.length; i++) {
                    let rowData = "<tr><td>" + data[i].timeToEat + "</td><td>" + data[i].foodToEat + "</td><td>" + data[i].foodType + "</td></tr>";

                    table = rowData;
                }
                document.getElementById('foodInput').innerHTML += table;
            }
            populateTable();
        }
        let clearLocalStorage = function clearLocalstorage(clear){
            clear.preventDefault();
            
            alert('Do you want to clear Local Storage');
            localStorage.clear();
        }
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('submitBtn').addEventListener('click', getFormData);
            document.getElementById('clear').addEventListener('click', clearLocalStorage);
        });
}
currentTime();



