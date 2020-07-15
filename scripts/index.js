
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
        
            let newline = '\r\n';
            
            if ((hour === 10) && (hour === 10 && minutes <= 59) && (midDay === "AM")) {
                showImages.src = "./images/breakfast.jpg";
                timeText.innerText = ' 10 AM. Go have your Breakfast';   
            }else if ((hour === 02) && (hour === 02 && minutes <= 59) && (midDay === "PM")){
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
            
            function table(json) {
                let cols = Object.keys(json[0]);
                let headerRow = '';
                let bodyRows = '';

                cols.map(function(col){
                    headerRow += '<th>' + col + '</th>'
                });

                json.map(function(row){
                    bodyRows += '<tr>';
                        cols.map(function(colName) {
                            bodyRows += '<td>' + row[colName] + '</td>';
                        });
                    bodyRows += '</tr>'
                });
                tableHeader = document.getElementById('tableHeader').innerHTML = headerRow;
                tableBody = document.getElementById('foodInput').innerHTML = bodyRows;
            }
            table(data);
            console.log(table());
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



