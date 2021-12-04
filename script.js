let timer_main = document.getElementById("Timer")
let stop_watch_main = document.getElementById("Stop-watch")
let clock_main = document.getElementById("Clock")
let alarm_main = document.getElementById("Alarm")

let real_hrs = document.getElementById("real-hours")
let real_min = document.getElementById("real-min")
let real_sec = document.getElementById("real-sec")
let am_pm = document.getElementById("am-pm")

let timer_btn = document.getElementById("Timer-btn")
let clock_btn = document.getElementById("Clock-btn")
let alarm_btn = document.getElementById("Alarm-btn")
let stopw_btn = document.getElementById("Stopwatch-btn")

let title = document.getElementById("heading")

function realtime(){
    let real = new Date()
    let hrs = real.getHours()%12
    let a = (hrs>0) ? am_pm.innerText = "PM" : am_pm.innerText = "AM"
    let hrs_pad = String(hrs).padStart(2,"0");
    let minutes = String(real.getMinutes()).padStart(2,"0")
    let seconds = String(real.getSeconds()).padStart(2,"0")
    real_hrs.innerText = hrs_pad
    real_min.innerText = minutes
    real_sec.innerText = seconds
}

setInterval(realtime,0)

timer_btn.addEventListener("click",function(){
    timer_main.style.display = "block";
    stop_watch_main.style.display = "none"
    clock_main.style.display = "none"
    alarm_main.style.display = "none"
    timer_btn.classList.add("style")
    clock_btn.classList.remove("style")
    stopw_btn.classList.remove("style")
    alarm_btn.classList.remove("style")
    title.innerText = "Timer"
})

stopw_btn.addEventListener("click",function(){
    stop_watch_main.style.display = "block"
    clock_main.style.display = "none"
    alarm_main.style.display = "none"
    timer_main.style.display = "none"
    timer_btn.classList.remove("style")
    clock_btn.classList.remove("style")
    stopw_btn.classList.add("style")
    alarm_btn.classList.remove("style")
    title.innerText = "Stop Watch"
})

clock_btn.addEventListener("click",function(){
    stop_watch_main.style.display = "none"
    clock_main.style.display = "block"
    alarm_main.style.display = "none"
    timer_main.style.display = "none"
    timer_btn.classList.remove("style")
    clock_btn.classList.add("style")
    stopw_btn.classList.remove("style")
    alarm_btn.classList.remove("style")
    title.innerText = "Clock"
})

alarm_btn.addEventListener("click",function(){
    stop_watch_main.style.display = "none"
    clock_main.style.display = "none"
    alarm_main.style.display = "block"
    timer_main.style.display = "none"
    timer_btn.classList.remove("style")
    clock_btn.classList.remove("style")
    stopw_btn.classList.remove("style")
    alarm_btn.classList.add("style")
    title.innerText = "Alarm"
})

