window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++){
                if (target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //TIMER
    let deadline = '2020-04-16';
    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
        return {
            'total' : t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock(){
            let t = getTimeRemaining(endtime);

            if (t.hours < 10){
                hours.textContent =`0${t.hours}`;    
            }
            else{
                hours.textContent = t.hours;
            }

            if (t.minutes < 10){
                minutes.textContent = `0${t.minutes}`;    
            }
            else{
                minutes.textContent = t.minutes;
            }

            if (t.seconds < 10){
                seconds.textContent = `0${t.seconds}`;    
            }
            else{
                seconds.textContent = t.seconds;
            }

            if (t.total <= 0){
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            }

        }

    }
    
    setClock('timer', deadline);

    //MODAL WINDOW
    let more = document.querySelectorAll('.description-btn, .more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.forEach(btn => btn.addEventListener('click', function(){
            overlay.style.display = 'block';
            btn.classList.add('more-spash');
            document.body.style.overflow = "hidden";
        }));

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        document.querySelector('.more-spash').classList.remove('more-spash');
        document.body.style.overflow = "";
    });

});
