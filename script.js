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
let hrs_up = document.getElementById("hrs-up")
let hrs_down = document.getElementById("hrs-down")
let min_up = document.getElementById("min-up")
let min_down = document.getElementById("min-down")
let sec_up = document.getElementById("sec-up")
let sec_down = document.getElementById("sec-down")
let h = timer_hrs.textContent
let m = timer_min.textContent
let s = timer_sec.textContent
function hours_up(){
    if(h<23){
        h=++h
        h = String(h).padStart(2,"0")
        timer_hrs.textContent = h
    }
}
function hours_down(){
    if(h>0){
        h =--h
        h = String(h).padStart(2,"0")
        timer_hrs.textContent = h
    }
}
function minutes_up(){
    if(m<59){
        m = ++m
        m = String(m).padStart(2,"0")
        timer_min.textContent = m
    }
}
function minutes_down(){
    if(m>0){
        m = --m
        m = String(m).padStart(2,"0")
        timer_min.textContent = m
    }
}
function seconds_up(){
    if(s<59){
        s = ++s
        s = String(s).padStart(2,"0")
        timer_sec.textContent = s
    }
}
function seconds_down(){
    if(s>0){
        s = --s
        s = String(s).padStart(2,"0")
        timer_sec.textContent = s
    }
}

// ******************Scroll Functionality for hours div*****************
function scroll_hrs(e){
    if(e.wheelDelta<0){
        hours_up()
      }
      else if(e.wheelDelta>0){
        hours_down()
      }
}

// ******************Scroll Functionality for minutes div*****************
function scroll_min(e){
    if(e.wheelDelta<0){
        minutes_up()
      }
      else if(e.wheelDelta>0){
        minutes_down()
      }
}

// ******************Scroll Functionality for seconds div*****************
function scroll_sec(e){
    if(e.wheelDelta<0){
        seconds_up()
      }
      else if(e.wheelDelta>0){
        seconds_down()
      }
}

// ***************Start timer button functionality**************
window.setInterval(function(){
    if(h>0 || m>0 || s>0){
        start_btn.addEventListener("click",count)
        start_btn.style.cursor = "pointer"
    }
    else{
        start_btn.removeEventListener("click",count)
        start_btn.style.cursor = "not-allowed"
    }
},0)
let timer_audio = new Audio("./timer_sound.wav")
function play_3times(){
    notallowed()
    removelistener()
    let i=0
    let o=0
    let play_sound = setInterval(function(){
        if(++i>3000){
            allowed()
            addlistener()
            timer_audio.currentTime = 0
            timer_audio.pause()
            clearInterval(play_sound)
        }
        else{
            timer_audio.play()
        }
    },o)

    setTimeout(function(){
        
        timer_sec.classList.remove("timer-bgchange")
        timer_min.classList.remove("timer-bgchange")
        timer_hrs.classList.remove("timer-bgchange")
    },12000)
}
// **********Cursor Not allowed function************
function notallowed(){
    timer_sec.style.cursor = "not-allowed"
    timer_min.style.cursor = "not-allowed"
    timer_hrs.style.cursor = "not-allowed"
    hrs_up.style.cursor = "not-allowed"
    hrs_down.style.cursor = "not-allowed"
    min_up.style.cursor = "not-allowed"
    min_down.style.cursor = "not-allowed"
    sec_up.style.cursor = "not-allowed"
    sec_down.style.cursor = "not-allowed"
}
// ***************Allowed cursor pointer***************
function allowed(){
    timer_sec.style.cursor = "pointer"
    timer_min.style.cursor = "pointer"
    timer_hrs.style.cursor = "pointer"
    hrs_up.style.cursor = "pointer"
    hrs_down.style.cursor = "pointer"
    min_up.style.cursor = "pointer"
    min_down.style.cursor = "pointer"
    sec_up.style.cursor = "pointer"
    sec_down.style.cursor = "pointer"
}

// ***********Add Event listener Function*****************
function addlistener(){
    hrs_up.addEventListener("click",hours_up)
    hrs_down.addEventListener("click",hours_down)
    min_up.addEventListener("click",minutes_up)
    min_down.addEventListener("click",minutes_down)
    sec_up.addEventListener("click",seconds_up)
    sec_down.addEventListener("click",seconds_down)
    timer_hrs.addEventListener("mousewheel",scroll_hrs)
    timer_min.addEventListener("mousewheel",scroll_min)
    timer_sec.addEventListener("mousewheel",scroll_sec)
}
addlistener()

// ***********Remove Event listener Function*****************
function removelistener(){
    hrs_up.removeEventListener("click",hours_up)
    hrs_down.removeEventListener("click",hours_down)
    min_up.removeEventListener("click",minutes_up)
    min_down.removeEventListener("click",minutes_down)
    sec_up.removeEventListener("click",seconds_up)
    sec_down.removeEventListener("click",seconds_down)
    timer_sec.removeEventListener("mousewheel",scroll_sec)
    timer_hrs.removeEventListener("mousewheel",scroll_hrs)
    timer_min.removeEventListener("mousewheel",scroll_min)
}

let cancel_flag
function count(){
        cancel_flag=0
        cancel_btn.style.display = "block"
        start_btn.style.display = "none"
        pause_btn.style.display = "block"
        notallowed()
        removelistener()
            var a = setInterval(function(){
            if(h == 0 && m == 0 && s == 0)
            {
                cancel_btn.style.display = "none"
                start_btn.style.display = "block"
                pause_btn.style.display = 'none'
                
                if(cancel_flag == 0){
                    timer_sec.classList.add("timer-bgchange")
                    timer_min.classList.add("timer-bgchange")
                    timer_hrs.classList.add("timer-bgchange")
                    stop_timer()
                    play_3times()
                }
                else{
                    allowed()
                    addlistener()
                }
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
            if(h==0 && m==0 && s>0 && s<=59){
                timer_sec.classList.add("timer-bgchange")
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
function stop_timer(){
    h=0;m=0;s=0;
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
function cancel(){
        h=0;m=0;s=0;
        cancel_flag=1
        timer_hrs.textContent = "00"
        timer_min.textContent = "00"
        timer_sec.textContent = "00"
        cancel_btn.style.display = "none"
        start_btn.style.display = "block"
        pause_btn.style.display = 'none'
        resume_btn.style.display = "none"
        if(cancel_flag == 1){
            timer_sec.classList.remove("timer-bgchange")
            timer_min.classList.remove("timer-bgchange")
            timer_hrs.classList.remove("timer-bgchange")
        }
        allowed()
        addlistener()
        
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
let al_snooze = document.getElementById("alarm-snooze-btn")
let al_hrs_up = document.getElementById("al-hrs-up")
let al_hrs_down = document.getElementById("al-hrs-down")
let al_min_up = document.getElementById("al-min-up")
let al_min_down = document.getElementById("al-min-down")
let ampm_change_up = document.getElementById("ampm-change-up")
let ampm_change_down = document.getElementById("ampm-change-down")
let al_h = alarm_hr.textContent
let al_m = alarm_min.textContent
let al_am_pm = alarm_am_pm.textContent
al_hrs_up.addEventListener("click",al_hours_up)
al_hrs_down.addEventListener("click",al_hours_down)
al_min_up.addEventListener("click",al_minutes_up)
al_min_down.addEventListener("click",al_minutes_down)
ampm_change_up.addEventListener("click",ampm_changeto_am)
ampm_change_down.addEventListener("click",ampm_changeto_pm)
function al_hours_up(){
    if(al_h<13){
        al_h=++al_h
        if(al_h>12){
            al_h = 1
        }
        al_h = String(al_h).padStart(2,"0")
        alarm_hr.textContent = al_h
    }
}
function al_hours_down(){
    if(al_h>0){
        al_h =--al_h
        if(al_h<1){
            al_h = 12
        }
        al_h = String(al_h).padStart(2,"0")
        alarm_hr.textContent = al_h
    }
}
function al_minutes_up(){
    if(al_m<60){
        al_m = ++al_m
        if(al_m>=60){
            al_m = 0
        }
        al_m = String(al_m).padStart(2,"0")
        alarm_min.textContent = al_m
    }
}
function al_minutes_down(){
    if(al_m>-1){
        al_m = --al_m
        if(al_m<0){
            al_m = 59
        }
        al_m = String(al_m).padStart(2,"0")
        alarm_min.textContent = al_m
    }
}
function ampm_changeto_pm(){
    if(al_am_pm == "AM"){
        al_am_pm = "PM"
        alarm_am_pm.textContent = al_am_pm
    }
}
function ampm_changeto_am(){
    if(al_am_pm == "PM"){
        al_am_pm = "AM"
        alarm_am_pm.textContent = al_am_pm
    }
}

// ****************Scroll functionality for Alarm hours div************
alarm_hr.addEventListener("mousewheel",scroll_alarm_hrs)
function scroll_alarm_hrs(e){
    if(e.wheelDelta<0){
        al_hours_up()
      }
      else if(e.wheelDelta>0){
        al_hours_down()
      }
}

// **********Scroll functionality form Alarm minute div****************
alarm_min.addEventListener("mousewheel",scroll_alarm_min)
function scroll_alarm_min(e){
    if(e.wheelDelta<0){
        al_minutes_up()
      }
      else if(e.wheelDelta>0){
        al_minutes_down()
      }
}

// *****************Scroll functionality for Alarm AM-PM div*****************
alarm_am_pm.addEventListener("mousewheel",scroll_alarm_ampm)
function scroll_alarm_ampm(e){
    if(e.wheelDelta<0){
        ampm_changeto_pm()
    }
    else if(e.wheelDelta>0){
        ampm_changeto_am()
    }
}
let alarm_add_btn = document.getElementById("alarm-add-btn")
let alarm_clear_btn = document.getElementById("alarm-clear-btn")
let alarm_div = document.getElementById("alarm-div")

// **********Alarm add button Functionality**************
let total_min
let count_chk = 0
let al_time_array = []
let lbl_id_array =[]
let alarm_play = new Audio("./audio.mp3")
var ring_text = "Ringing..."
let snooze=1
    setInterval(function(){
    let real = new Date()
    let al_seconds = real.getSeconds()
    if(al_seconds == 0){
        snooze=1
        alarm_play.currentTime = 0
    }
    let ring_hr = real.getHours()
    let ring_min = real.getMinutes()
    total_min = (ring_hr*60)+ring_min
    let alarm_div_childs = alarm_div.childNodes
    for(j=0;j<al_time_array.length;j++){
        let al_div_child_childs  = alarm_div_childs[j+1]
        if(total_min-al_time_array[j] == 0){
            if(alarm_play.currentTime<1 && snooze==1){
                alarm_play.play() 
            }
            al_div_child_childs.classList.add("ringing")
            
        }else{
            al_div_child_childs.classList.remove("ringing")
        }  
    }
},0)
// **********Alarm Stop button functionality**********
al_snooze.addEventListener("click",al_stop)
function al_stop(){
    clearTimeout()
    snooze = 0
    alarm_play.currentTime = 0
    alarm_play.pause() 
    setTimeout(function(){
    snooze = 1
    },15000)   
}

// *************Alarm Add button Funtionality
alarm_add_btn.addEventListener("click",function(){
    al_snooze.style.display = "block"
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
    al_div.style.borderBottom = "1px solid black"
    
    let al_chk = document.createElement("input")
    al_chk.id = ++count_chk
    al_chk.setAttribute("type","checkbox")
    let al_rem = document.createElement("label")
    al_rem.id = count_chk+"lbl"
    
    lbl_id_array.push(count_chk+"lbl")
    setInterval(rem,0)
    function rem(){
        for(k=0;k<al_time_array.length;k++){
            let g = al_time_array[k]
            var h = g-total_min
            if(h<0){
                h = (1440 - total_min) + g
            }
            let hh = String(h/60).slice(0,String(h/60).indexOf("."))
            if(h%60 == 0){
                hh = h/60
            }
            let mm = h%60
            let zz = lbl_id_array[k]
            let ring_lbl = document.getElementById(zz)
            if(hh == 0 && mm == 0){
                ring_lbl.textContent = ring_text
            }
            else{
                ring_lbl.textContent = " rings in "+String(hh).padStart(2,"0")+" hr "+String(mm).padStart(2,"0")+" min"
            } 
        }
    }
    let al_time = document.createElement("label")
    al_time.textContent = al_h+":"+al_m+" "+al_am_pm
    al_div.appendChild(al_chk)
    al_div.appendChild(al_time)
    al_div.appendChild(al_rem)
    alarm_div.appendChild(al_div)
})

// ******************Alarm clear button functionality***********
alarm_clear_btn.addEventListener("click",function(){  
   var alarm_div_childs = alarm_div.childNodes
   for(i=0;i<al_time_array.length;)
   {
       var al_div_child_childs  = alarm_div_childs[i+1].childNodes
       var child_chk = al_div_child_childs[0].id
       var chk_id = document.getElementById(child_chk)
       if(chk_id.checked == true){
            alarm_div.removeChild(alarm_div_childs[i+1])
            al_time_array.splice(i,1)
            lbl_id_array.splice(i,1)
            alarm_play.pause() 
            alarm_play.currentTime = 0
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

