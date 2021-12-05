// ****************Main DIV*****************
let timer_main = document.getElementById("Timer")
let stop_watch_main = document.getElementById("Stop-watch")
let clock_main = document.getElementById("Clock")
let alarm_main = document.getElementById("Alarm")

// *****************Clock********************
let real_hrs = document.getElementById("real-hours")
let real_min = document.getElementById("real-min")
let real_sec = document.getElementById("real-sec")
let am_pm = document.getElementById("am-pm")

// ********************BUTTON******************
let timer_btn = document.getElementById("Timer-btn")
let clock_btn = document.getElementById("Clock-btn")
let alarm_btn = document.getElementById("Alarm-btn")
let stopw_btn = document.getElementById("Stopwatch-btn")

// ********************title*****************
let title = document.getElementById("heading")

// *********************TIMER****************
let timer_hrs = document.getElementById("timer-hours")
let timer_min = document.getElementById("timer-min")
let timer_sec = document.getElementById("timer-sec")
let start_btn = document.getElementById("start-btn")
let cancel_btn = document.getElementById("cancel-btn")
let pause_btn = document.getElementById("pause-btn")
let resume_btn = document.getElementById("resume-btn")
let h = timer_hrs.textContent
let m = timer_min.textContent
let s = timer_sec.textContent

// ******************Scroll Functionality for hours div*****************
timer_hrs.addEventListener("mousewheel",scroll_hrs)
function scroll_hrs(e){
    if(e.wheelDelta<0){
        if(h<23){
            h=++h
            h = String(h).padStart(2,"0")
            timer_hrs.textContent = h
        }
      }
      else if(e.wheelDelta>0){
        if(h>0){
            h =--h
            h = String(h).padStart(2,"0")
            timer_hrs.textContent = h
        }
      }
}

// ******************Scroll Functionality for minutes div*****************
timer_min.addEventListener("mousewheel",scroll_min)
function scroll_min(e){
    if(e.wheelDelta<0){
        if(m<59){
            m = ++m
            m = String(m).padStart(2,"0")
            timer_min.textContent = m
        }
      }
      else if(e.wheelDelta>0){
        if(m>0){
            m = --m
            m = String(m).padStart(2,"0")
            timer_min.textContent = m
        }
      }
}

// ******************Scroll Functionality for seconds div*****************
timer_sec.addEventListener("mousewheel",scroll_sec)
function scroll_sec(e){
    if(e.wheelDelta<0){
        if(s<59){
            s = ++s
            s = String(s).padStart(2,"0")
            timer_sec.textContent = s
        }
      }
      else if(e.wheelDelta>0){
        if(s>0){
            s = --s
            s = String(s).padStart(2,"0")
            timer_sec.textContent = s
        }
      }
}

// ***************Start timer button functionality**************
window.setInterval(function(){
    if(h>0 || m>0 || s>0){
        start_btn.addEventListener("click",count)
        start_btn.style.cursor = "pointer"
    }
    else{
        start_btn.style.cursor = "not-allowed"
    }
},0)

function count(){
        cancel_btn.style.display = "block"
        start_btn.style.display = "none"
        pause_btn.style.display = "block"
        timer_sec.style.cursor = "not-allowed"
        timer_min.style.cursor = "not-allowed"
        timer_hrs.style.cursor = "not-allowed"
        timer_sec.removeEventListener("mousewheel",scroll_sec)
        timer_hrs.removeEventListener("mousewheel",scroll_hrs)
        timer_min.removeEventListener("mousewheel",scroll_min)
            var a = setInterval(function(){
            if(h == 0 && m == 0 && s == 0)
            {
                cancel_btn.style.display = "none"
                start_btn.style.display = "block"
                pause_btn.style.display = 'none'
                clearInterval(a)
            }
            else{
                if(s!=0)
                {
                    s = String(--s).padStart(2,"0")
                    timer_sec.textContent = s
                }
                else{
                    if(m!=0)
                    {
                        m = String(--m).padStart(2,"0")
                        timer_min.innerText = m
                    }
                    else{
                        m=59
                        timer_min.innerText = m
                        if(h!=0)
                        {
                            h = String(--h).padStart(2,"0")
                            timer_hrs.innerText = h
                        }
                    }
                    s=59
                    timer_sec.innerText = s
                }
            }
            
        },1000)

        // *************Pause timer button functionalty*********
        pause_btn.addEventListener("click",function(){
        clearInterval(a)
        resume_btn.style.display = 'block'
        pause_btn.style.display = "none"
    })
}
        // *************Resume timer button functionality****************
        resume_btn.addEventListener("click",function(){
        count()
        resume_btn.style.display = "none"
        pause_btn.style.display = "block"
    })
        // ***************Cancel button functionality************
        cancel_btn.addEventListener("click",function(){
            h=0,m=0,s=0
            timer_hrs.textContent = "00"
            timer_min.textContent = "00"
            timer_sec.textContent = "00"
        })





// *************Function for Clock**************
function realtime(){
    var hrs_pad
    let real = new Date()
    let hrs = real.getHours()%24
    let a = (hrs>=12) ? am_pm.innerText="PM" : am_pm.innerText="AM"
    if(hrs>12){
        hrs_pad = String(hrs%12).padStart(2,"0"); 
    }
    else{
        hrs_pad = String(hrs).padStart(2,"0");
    }
    let minutes = String(real.getMinutes()).padStart(2,"0")
    let seconds = String(real.getSeconds()).padStart(2,"0")
    real_hrs.innerText = hrs_pad
    real_min.innerText = minutes
    real_sec.innerText = seconds
}
setInterval(realtime,0)

// Timer Navigation button
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

// Stopwatch Navigation button
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

// Clock Navigation button
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

// Alarm Navigation button
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

