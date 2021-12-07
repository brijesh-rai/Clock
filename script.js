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
                cancel()
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
cancel_btn.addEventListener("click",cancel)
function cancel(){
        h=0,m=0,s=0
        timer_hrs.textContent = "00"
        timer_min.textContent = "00"
        timer_sec.textContent = "00"
        start_btn.removeEventListener("click",count)
        timer_sec.addEventListener("mousewheel",scroll_sec)
        timer_min.addEventListener("mousewheel",scroll_min)
        timer_hrs.addEventListener("mousewheel",scroll_hrs)
        timer_sec.style.cursor = "pointer"
        timer_min.style.cursor = "pointer"
        timer_hrs.style.cursor = "pointer"
        cancel_btn.style.display = "none"
        start_btn.style.display = "block"
        pause_btn.style.display = 'none'
        resume_btn.style.display = "none"
}


// *************Function for Clock**************
setInterval(realtime,0)
function realtime(){
    var hrs_pad
    let  real = new Date()
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

//*************STOPWATCH Functionality****************// 
let sw_min = document.getElementById("sw-min")
let sw_sec = document.getElementById("sw-sec")
let sw_ms = document.getElementById("sw-ms")
let sw_start_btn = document.getElementById("sw-start-btn")
let sw_pause_btn = document.getElementById("sw-pause-btn")
let sw_resume_btn = document.getElementById("sw-resume-btn")
let sw_lap_btn = document.getElementById("sw-lap-btn")
let sw_reset_btn = document.getElementById("sw-reset-btn")


let ms = 0
let sw_s = 0
let sw_m = 0

function stopwatch(){
    let stop_SW = setInterval(function(){
        if(ms == 99){
            ms  = 0
            if(sw_s==59){
                sw_s = 0
                ++sw_m
            }
            else{
                ++sw_s
            }
        }
        else{
            ++ms
        }
        sw_ms.textContent = String(ms).padStart(2,"0")
        sw_min.textContent = String(sw_m).padStart(2,"0")
        sw_sec.textContent = String(sw_s).padStart(2,"0")
    },10)

    function resett(){
        clearInterval(stop_SW)
    }
// **********Pause button Functionality*************
    sw_pause_btn.addEventListener("click",function(){
        resett()
        sw_pause_btn.style.display = "none"
        sw_resume_btn.style.display = "block"
        sw_lap_btn.style.display = "none"
        sw_reset_btn.style.display = "block"
    })
}

// *****************Start button functionality********
sw_start_btn.addEventListener("click",function(){
    sw_start_btn.style.display = "none"
    sw_lap_btn.style.display = "block"
    sw_pause_btn.style.display = "block"
    stopwatch()
})

// *****************Resume button functionality*************
sw_resume_btn.addEventListener("click",function(){
    stopwatch()
    sw_pause_btn.style.display = "block"
    sw_resume_btn.style.display = "none"
    sw_lap_btn.style.display = "block"
    sw_reset_btn.style.display = "none"
})


// *********************Reset button functionality********
sw_reset_btn.addEventListener("click",function(){
    sw_min.textContent = String("0").padStart(2,"0")
    sw_sec.textContent = String("0").padStart(2,"0")
    sw_ms.textContent = String("0").padStart(2,"0")
    sw_start_btn.style.display = "block"
    sw_reset_btn.style.display = "none"
    sw_resume_btn.style.display = "none"
    lap_div.style.display = "none"
    ms = 0
    sw_s = 0
    sw_m = 0
    lap_count = 0
    diff = 0
    bg_switch = 1
    lap_div.innerHTML = ""
    resett()
    
})

// ******************Lap button functionality**************
let lap_div = document.getElementById("lap")
let lap_count = 0
let diff = 0
let bg_switch = 1
sw_lap_btn.addEventListener("click",function(){
    lap_div.style.display = "block"
    let divv = document.createElement("div")
    let lb_1 = document.createElement("label")
    let lb_2 = document.createElement("label")
    let lb_3 = document.createElement("label")
    if(bg_switch!=0){
        divv.style.backgroundColor = "rgb(150,0,0)"
        divv.style.color = "white"
        bg_switch = 0
    }
    else{
        divv.style.backgroundColor = "rgb(100,0,0)"
        divv.style.color = "white"
        bg_switch = 1
    }
    lb_1.textContent = String(++lap_count).padStart(2,"0")
    let lap_m = sw_m
    let lap_s = sw_s
    let lap_ms = ms
    lb_2.textContent = String(lap_m).padStart(2,"0")+":"+String(lap_s).padStart(2,"0")+"."+String(lap_ms).padStart(2,"0")
    let in_ms = (lap_m*60*1000) + (lap_s*1000) + lap_ms
    let diff_prev = in_ms - diff
    let diff_min = String(diff_prev/60000).slice(0,String(diff_prev/60000).indexOf("."))
    let diff_sec = String(diff_prev/1000).slice(0,String(diff_prev/1000).indexOf("."))
        diff_sec = diff_sec%60
    let diff_ms = diff_prev%100
    diff = in_ms
    lb_3.textContent = "+"+String(diff_min).padStart(2,"0")+":"+String(diff_sec).padStart(2,"0")+"."+String(diff_ms).padStart(2,"0")
    divv.appendChild(lb_1)
    divv.appendChild(lb_2)
    divv.appendChild(lb_3)
    lap_div.insertBefore(divv,lap.childNodes[0])
})

// *********************Alarm button Functionality****************
let alarm_hr = document.getElementById("alarm-hours")
let alarm_min = document.getElementById("alarm-min")
let alarm_am_pm = document.getElementById("alarm-am-pm")
let al_h = alarm_hr.textContent
let al_m = alarm_min.textContent
let al_am_pm = alarm_am_pm.textContent

// ****************Scroll functionality for Alarm hours div************
alarm_hr.addEventListener("mousewheel",scroll_alarm_hrs)
function scroll_alarm_hrs(e){
    if(e.wheelDelta<0){
        if(al_h<13){
            al_h=++al_h
            if(al_h>12){
                al_h = 1
            }
            al_h = String(al_h).padStart(2,"0")
            alarm_hr.textContent = al_h
        }
      }
      else if(e.wheelDelta>0){
        if(al_h>0){
            al_h =--al_h
            if(al_h<1){
                al_h = 12
            }
            al_h = String(al_h).padStart(2,"0")
            alarm_hr.textContent = al_h
        }
      }
}

// **********Scroll functionality form Alarm minute div****************
alarm_min.addEventListener("mousewheel",scroll_alarm_min)
function scroll_alarm_min(e){
    if(e.wheelDelta<0){
        if(al_m<60){
            al_m = ++al_m
            if(al_m>=60){
                al_m = 0
            }
            al_m = String(al_m).padStart(2,"0")
            alarm_min.textContent = al_m
        }
      }
      else if(e.wheelDelta>0){
        if(al_m>-1){
            al_m = --al_m
            if(al_m<0){
                al_m = 59
            }
            al_m = String(al_m).padStart(2,"0")
            alarm_min.textContent = al_m
        }
      }
}

// *****************Scroll functionality for Alarm AM-PM div*****************
alarm_am_pm.addEventListener("mousewheel",scroll_alarm_ampm)
function scroll_alarm_ampm(e){
    if(e.wheelDelta<0){
        if(al_am_pm == "AM"){
            al_am_pm = "PM"
            alarm_am_pm.textContent = al_am_pm
        }
    }
    else if(e.wheelDelta>0){
        if(al_am_pm == "PM"){
            al_am_pm = "AM"
            alarm_am_pm.textContent = al_am_pm
        }
    }
}
let alarm_add_btn = document.getElementById("alarm-add-btn")
let alarm_clear_btn = document.getElementById("alarm-clear-btn")
let alarm_div = document.getElementById("alarm-div")


// **********Alarm add button Functionality**************
var alarm_div_childs = alarm_div.childNodes
let count_chk = 0
let al_time_array = []
let alarm_play = new Audio("./audio.mp3")
setInterval(function(){
    let real = new Date()
    let ring_hr = real.getHours()
    let ring_min = real.getMinutes()
    let total_min = (ring_hr*60)+ring_min
    for(j=0;j<al_time_array.length;j++){
        if(total_min-al_time_array[j] == 0){
            al_time_array.splice(j,1)
            alarm_play.play()
        }
    }
},1000)
alarm_add_btn.addEventListener("click",function(){
    let al_real_hr = Number(al_h)
    let al_real_min = Number(al_m)
    if(al_real_hr == 12 && al_am_pm == "AM"){
        al_real_hr = 0
    }
    else if(al_am_pm == "PM" && al_real_hr!=12)
    {
        al_real_hr =al_real_hr + 12
    }
    let al_total_min =(al_real_hr*60)+al_real_min
    al_time_array.push(al_total_min)
    
    alarm_div.style.display = "block"
    alarm_clear_btn.style.display = "block"
    let al_div = document.createElement("div")
    let al_chk = document.createElement("input")
    al_chk.id = ++count_chk
    al_chk.setAttribute("type","checkbox")
    let al_rem = document.createElement("label")
    al_rem.textContent = "Rings in 2 hours 30 min"
    let al_time = document.createElement("label")
    al_time.textContent = al_h+":"+al_m+" "+al_am_pm
    al_div.appendChild(al_chk)
    al_div.appendChild(al_time)
    al_div.appendChild(al_rem)
    alarm_div.appendChild(al_div)
})

// ******************Alarm clear button functionality***********

alarm_clear_btn.addEventListener("click",function(){  
   for(i=1;i<=alarm_div_childs.length;)
   {
       var al_div_child_childs  = alarm_div_childs[i].childNodes
       var child_chk = al_div_child_childs[0].id
       var chk_id = document.getElementById(child_chk)
       if(chk_id.checked == true){
            alarm_div.removeChild(alarm_div_childs[i])
        }
        else{
            i++
        }
   }
})


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

