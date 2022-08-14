let username = prompt("Adınız nedir?");
document.querySelector("#myName").innerText = username;



function updateClock()
{
    const d = new Date();
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let clockobject = document.querySelector("#myClock");
    let day = weekday[d.getDay()];
    clockobject.innerText = hour + ":" + minute + ":" + second + " " + day;
}
updateClock();
setInterval(updateClock, 1000);