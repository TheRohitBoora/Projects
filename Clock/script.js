let time = document.querySelector("#clock")
let wday = document.querySelector("#day")
let dates = document.querySelector("#date")

function clock() {
    let Week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let Month = ["January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December",]

    //Creating values for clock and date

    let date = new Date()
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let mvalue = date.getMonth();
    let dvalue = date.getDate();
    let wvalue = date.getDay();
    let year = date.getFullYear();

    month = Month[mvalue]
    day = Week[wvalue]


    const period = hours >= 12 ? "PM" : "AM";
    if (hours === 00) {
        hours = 12; 
    } else if (hours > 12) {
        hours -= 12; 
    }
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    time.innerHTML = `${hours}:${minutes}:${seconds} ${period} `
    wday.innerHTML = `${day} <br> `
    dates.innerHTML = `${dvalue} ${month}, ${year}`
}
clock()
setInterval(clock, 1000)
